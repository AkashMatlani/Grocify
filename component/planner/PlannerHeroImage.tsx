import { LinearGradient } from 'expo-linear-gradient';
import { Image, View } from 'react-native';

const PlannerHeroImage = () => {
    return (
        <View className='overflow-hidden rounded-[30px] border border-border bg-card'>
            <Image
                source={require("../../assets/images/hero.png")}
                className='h-56 w-full'
                resizeMode='cover'
            />
            <LinearGradient
                colors={["rgba(0,0,0,0.4)", "transparent"]}
                pointerEvents='none'
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={{ position: "absolute", top: 0, left: 0, right: 0, height: 72 }}
            ></LinearGradient>
            <LinearGradient
                colors={["transparent","rgba(0,0,0,0.4)"]}
                pointerEvents='none'
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 72 }}
            ></LinearGradient>
        </View>
    )
}

export default PlannerHeroImage