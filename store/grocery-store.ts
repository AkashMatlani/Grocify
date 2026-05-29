import { create } from "zustand";

export type GroceryCategory = "Produce" | "Dairy" | "Bakery" | "Pantry" | "Snacks";
export type Grocerypriority = "low" | "medium" | "high";

export type GroceryItem = {
    id: string;
    name: string;
    category: GroceryCategory;
    quantity: number;
    purchased: boolean;
    priority: Grocerypriority;
};

export type CreateItemInput = {
    name: string;
    category: GroceryCategory;
    quantity: number;
    priority: Grocerypriority;
};

type ItemsResponse = { items: GroceryItem[] };
type ItemResponse = { item: GroceryItem };

type GroceryStore = {
    items: GroceryItem[];
    isLoading: boolean;
    error: string | null;
    loadItems: () => Promise<void>;
    addItem: (input: CreateItemInput) => Promise<GroceryItem | void>;
    updateQuantity: (id: string, quantity: number) => Promise<void>;
    togglePurchased: (id: string) => Promise<void>;
    removeItem: (id: string) => Promise<void>;
    clearPurchased: () => Promise<void>;
};

export const useGroceryStore = create<GroceryStore>((set, get) => ({
    items: [],
    isLoading: false,
    error: null,

    loadItems: async () => {
        set({ isLoading: true, error: null });

        try {
            const res = await fetch("/api/items");
            const paylaod = (await res.json()) as ItemsResponse;

            if (!res.ok) throw new Error(`Request Failed (${res.status})`);
            set({ items: paylaod.items });

        } catch (error) {
            console.error("Error loading items:", error);
            set({ error: "Something went wrong" });
        }
        finally {
            set({ isLoading: false });
        }
    },
    addItem: async (input) => {
        set({ error: null });
        try {
            const res = await fetch("/api/items", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: input.name,
                    category: input.category,
                    quantity: Math.max(1, input.quantity),
                    priority: input.priority,
                })
            });
            const paylaod = (await res.json()) as ItemResponse;
            if (!res.ok) throw new Error(`Request Failed (${res.status})`);
            set((state) => ({ items: [paylaod.item, ...state.items] }))
            return paylaod.item;
        } catch (error) {
            console.error("Error adding item:", error);
            set({ error: "Something went wrong" });
        }
    },
    updateQuantity: async (id, quantity) => {
        const nextQuantity = Math.max(1, quantity);
        set({ error: null });
        try {
            const res = await fetch(`/api/items/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    quantity: nextQuantity,
                })
            });
            const paylaod = (await res.json()) as ItemResponse;
            if (!res.ok) throw new Error(`Request Failed (${res.status})`);
            set((state) => ({ items: state.items.map((item) => (item.id === id ? paylaod.item : item)) }));
        } catch (error) {
            console.error("Error updating quantity:", error);
            set({ error: "Something went wrong" });
        }
    },
    togglePurchased: async (id) => { },
    removeItem: async (id) => { },
    clearPurchased: async () => { },
}));