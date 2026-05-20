import { FontAwesome } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useSocailAuth from '../hooks/useSoiaclAuth';

export default function SignInScreen() {

  const { handleSocialAuth, loadingStartegy } = useSocailAuth();
  const isGoogleClicked = loadingStartegy === "oauth_google";
  const isAppleClicked = loadingStartegy === "oauth_apple";
  const isGitHubClicked = loadingStartegy === "oauth_github";

  const isLoading =isGoogleClicked || isAppleClicked || isGitHubClicked;

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


        <View className='mt-6 border border-white/20 bg-white/10 p-3 rounded-[30px]'>
          <Image source={require("../../assets/images/auth.png")}
            style={{ width: "100%", height: 300 }}
            contentFit="contain" />
        </View>
      </View>

      <View className="mt-8 flex-1  rounded-t-[36] bg-card px-8 pb-8 pt-6">
        <View className="self-center rounded-full bg-secondary px-3 py-1">
          <Text className="text-xs font-semibold uppercase tracking-[1px] text-secondary-foreground">
            Welcome Back
          </Text>
        </View>
        <Text className="mt-2 text-center text-sm leading-6 text-muted-foreground">
          Choose a social provider and jump right into your persoanlized grocery experince.
        </Text>

        <View className="mt-6">
          <Pressable
            className={`mb-3 h-14 flex-row items-center rounded-2xl 
          border border-border bg-card px-4 active:opacity-90
           ${isLoading ? "opacity-70" : ""}`}
            disabled={isLoading}
            onPress={() => handleSocialAuth("oauth_google")}>

            <View className="h-8 w-8 items-center justify-center rounded-full bg-white">
              <Image source={require("../../assets/images/google.png")}
                style={{ width: 20, height: 20 }} />
            </View>
             <Text  className="ml-3 flex-1 text-lg font-semibold text-card-foreground">
             {isGoogleClicked? "Connecting Google..." : "Continue with Google"}
             </Text>

             <FontAwesome name="angle-right" size ={18} color="#56fe66"/>
          </Pressable>
        </View>
      </View>

    </SafeAreaView>
  )
}