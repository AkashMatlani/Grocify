import { GroceryCategory, Grocerypriority, useGroceryStore } from '@/store/grocery-store';
import { FontAwesome6 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const categories: GroceryCategory[] = ["Produce", "Dairy", "Bakery", "Pantry", "Snacks"];
const priorities: string[] = ["low", "medium", "high"];

const categoryIcons = {
    Produce: "leaf",
    Dairy: "cow",
    Bakery: "bread-slice",
    Pantry: "box-open",
    Snacks: "cookie-bite",
}
const PlannerFormCard = () => {

    const { error, addItem } = useGroceryStore();

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [category, setCategory] = useState<GroceryCategory>("Produce");
    const [priority, setPriority] = useState<Grocerypriority>("medium");

    const canCreate = name.trim().length > 0;

    const handleQuantityChange = (value: string) => {
        //regex to allow only numbers
        setQuantity(value.replace(/[^0-9]/g, ""));
    }

    const createItem = async () => {
        await addItem({
            name: name.trim(),
            category,
            priority,
            quantity: Number(quantity)
        });

        //reset form
        setName("");
        setQuantity("1");
        setCategory("Produce");
        setPriority("medium");
    }

    return (
        <View className='rounded-3xl border border-border bg-card p-4'>
            {/* Name */}
            <Text className='text-sm font-semibold text-foreground'>Item Name</Text>
            <View className='flex-row mt-2  items-center rounded-2xl border bg-muted border-border px-4 py-3'>
                <FontAwesome6 name="bag-shopping" size={13} color="#5b7567" />
                <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder='e.g.Blueberries'
                    className='ml-3 flex-1 text-base text-foreground'
                    placeholderTextColor="#8aa397"
                />
            </View>
            {/* Quantity */}
            <Text className='text-sm font-semibold text-foreground'>Quantity</Text>
            <View className='flex-row mt-2  items-center rounded-2xl border bg-muted border-border px-4 py-3'>
                <FontAwesome6 name="hashtag" size={13} color="#5b7567" />
                <TextInput
                    value={quantity}
                    onChangeText={handleQuantityChange}
                    keyboardType='number-pad'
                    placeholder='1'
                    className='ml-3 flex-1 text-base text-foreground'
                    placeholderTextColor="#8aa397"
                />
            </View>
        </View>
    )
}

export default PlannerFormCard