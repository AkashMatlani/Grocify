import { useAuth } from '@clerk/expo';
import { Redirect, Stack } from 'expo-router';

export default function AuthRoutesLayout() {
  const { isSignedIn, isLoaded } = useAuth()

  if (!isLoaded) {
    return;
  }

  if (isSignedIn) {
    return <Redirect href={'/'} />
  }

  return <Stack />
}