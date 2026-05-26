import { useSSO } from "@clerk/expo";
import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

const useSocialAuth = () => {
    const [loadingStartegy, setLoadingStartegy] = useState<string | null>(null);
    const { startSSOFlow } = useSSO();

    const handleSocialAuth = async (strategy: "oauth_google" | "oauth_github" | "oauth_apple") => {
        if (loadingStartegy) return;
        setLoadingStartegy(strategy);
        try {
            const { createdSessionId, setActive } = await startSSOFlow({ strategy });
            if (!createdSessionId || !setActive) {
                Alert.alert("Sign-in incomplete", "signin did not complete .Please try again");
                return;
            }
            await setActive({ session: createdSessionId })
            router.replace("/(tabs)");

        } catch (error) {
            console.log("Error in social auth", error);
            Alert.alert("Sign-in failed", "signin did not complete .Please try again");
        }
        finally {
            setLoadingStartegy(null);
        }

    }
    return { handleSocialAuth, loadingStartegy }

};

export default useSocialAuth;