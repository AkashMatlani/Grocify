import InsightCategorySection from '@/component/insights/InsightCategorySection'
import InsightStatsSection from '@/component/insights/InsightStatsSection'
import UserProfile from '@/component/insights/UserProfile'
import TabScreenBackground from '@/component/TabScreenBackground'
import React from 'react'
import { ScrollView } from 'react-native'

const Insights = () => {
  return (
    <ScrollView className='flex-1 bg-background py-4'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 20, gap: 14 }}
      contentInsetAdjustmentBehavior='automatic'>
      <TabScreenBackground />

      <UserProfile />
      <InsightStatsSection />
      <InsightCategorySection />
    </ScrollView>
  )
}

export default Insights