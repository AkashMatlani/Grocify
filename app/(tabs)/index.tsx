import ListHeroCard from '@/component/list/ListHeroCard';
import TabScreenBackground from '@/component/TabScreenBackground';
import { useGroceryStore } from '@/store/grocery-store';
import { ScrollView, Text, View } from 'react-native';

export default function ListScreen() {

const {items}=useGroceryStore();
const pendingItems = items.filter(item => !item.purchased);
  return (
    <ScrollView className='flex-1 bg-background py-4'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 20, gap: 14 }}>

      <TabScreenBackground/>
      <ListHeroCard/>
      <View className="flex-row items-center justify-between px-1">
        <Text className='text-sm font-semibold uppercase tracking-[1px] text-priority-low-foreground'>
          Shopping items</Text>
        <Text className='text-sm text-muted-foreground'>
          {pendingItems.length} active</Text>
      </View>
    </ScrollView>

  )
}