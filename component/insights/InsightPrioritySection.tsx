import { useGroceryStore } from '@/store/grocery-store';
import React from 'react';
import { Text, View } from 'react-native';

export default function InsightPrioritySection() {
    const { items } = useGroceryStore();
    const highPriority = items.filter((item) => item.priority === "high" && !item.purchased).length;
    const highPriorityTone = highPriority === 0
        ? "Everything critical is coverd."
        : "Handle These first for a smoother trip."
    return (
        <View className='rounded-3xl border border-border bg-card p-4'>
            <View className='flex-row items-center justify-between'>
                <Text className='text-sm font-semibold text-foreground'>High priority remaining</Text>
                <View className={`rounded-full px-3 py-1 ${highPriority
                    ? "bg-priority-high"
                    : "bg-priority-low"}`}
                >
                    <Text className={`text-xs font-bold uppercase ${highPriority
                        ? "text-priority-high-foreground"
                        : "text-priority-low-foreground"}`}
                        >
                            {highPriority? "Action" : "Clear"}
                    </Text>
                </View>
            </View>
        </View>
    )
}

