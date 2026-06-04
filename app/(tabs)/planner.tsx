import TabScreenBackground from '@/component/TabScreenBackground';
import { useGroceryStore } from '@/store/grocery-store';
import { FontAwesome6 } from '@expo/vector-icons';
import { ScrollView, Text, View } from 'react-native';

const PlannerScreen = () => {
    const { items } = useGroceryStore();

    const pendingCount = items.filter((item) => !item.purchased).length;
    const highPriorirty = items.filter((item) => !item.purchased && item.priority === 'high').length;

    const totalQuanity = items.filter((item) => !item.purchased)
        .reduce((sum, item) => sum + item.quantity, 0);

    return (
        <ScrollView className="flex-1 bg-background py-4"
            contentInsetAdjustmentBehavior='automatic'
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ padding: 20, gap: 14 }}>
            <TabScreenBackground />
            <View className='gap-4 rounded-3xl border border-border bg-card/70 p-5'>
                <View className='flex-row items-start justify-between'>
                    <View className='flex-1 pr-4'>
                        <Text className='text-xs font-semibold uppercase tracking-[1.2px] text-muted-foreground'>
                            Gocerry Planner
                        </Text>
                        <Text className='mt-1 text-3xl font-bold leading-9 text-foreground'>
                            Plan Smarter, shop calmer
                        </Text>
                        <Text className='mt-2 text-sm leading-5 text-muted-foreground'>
                            Organize your next grocery run with categories, quantities, and priorities in one place.
                        </Text>
                    </View>
                    <View className='h-12 w-12 items-center justify-center rounded-2xl bg-primary'>
                        <FontAwesome6 name="wand-magic-sparkles" size={18} color="#ffffff" />
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

export default PlannerScreen