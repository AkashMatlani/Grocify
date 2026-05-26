import { useAuth } from '@clerk/expo';
import { Redirect } from 'expo-router';
import { Icon, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabsLayout() {
  const { isSignedIn, isLoaded } = useAuth()

  if (!isLoaded) {
    return null
  }

  if (!isSignedIn) {
    return <Redirect href="/(auth)/sign-in" />
  }

  return <NativeTabs>
    <NativeTabs.Trigger
      name="index">
      <Icon sf="house.fill" />
    </NativeTabs.Trigger>

    <NativeTabs.Trigger name="planner">
      <Icon sf="plus.circle" />
    </NativeTabs.Trigger>
  </NativeTabs>
}