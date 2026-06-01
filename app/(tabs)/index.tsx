import TabScreenBackground from '@/component/TabScreenBackground'
import { useClerk, useUser } from '@clerk/expo'
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated'

export default function ListScreen() {
  const { user } = useUser()
  const { signOut } = useClerk()

  return (
    <ScrollView className='flex-1 bg-background py-4'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 20, gap: 14 }}>

      <TabScreenBackground/>
    </ScrollView>

  )
}