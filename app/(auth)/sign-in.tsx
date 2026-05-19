import { Image } from "expo-image";
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useSocailAuth from '../hooks/useSoiaclAuth';

export default function SignInScreen() {

  const { handleSocialAuth, loadingStartegy } = useSocailAuth();

  return (
    <SafeAreaView className='flex-1 bg-primary'>
      {/* decorative elements */}
      <View className="absolute -left-16 top-12 h-56 w-56 rounded-full bg-primary/80 dark:bg-background/40" />
      <View className="absolute right-[-74px] top-40 h-72 w-72 rounded-full bg-primary/70 dark:bg-background/35" />

      <View className='px-6 pt-4'>
        <Text className='text-center text-5xl font-extrabold tracking-tighter 
      text-primary-foreground uppercase font-mono dark:text-foreground'>
          Grocify
        </Text>

        <Text className='mt-1 text-center text-[14px] text-primary-foreground/80 dark:text-foreground/75'>
          Plan smater. Shop happier.
        </Text>
      </View>

      <View className='mt-6 border border-white/20 bg-white/10 p-3 rounded-[30px]'>
        <Image source={require("../../assets/images/auth.png")}
          style={{ width: "100%", height: 300 }}
          contentFit="contain" />
      </View>
    </SafeAreaView>
  )
}