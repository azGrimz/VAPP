import { FA6Style } from "@expo/vector-icons/build/FontAwesome6";
import { Stack } from "expo-router";




export default function MainLayout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{headerShown:false}}/>
            <Stack.Screen name="register" options={{headerShown:false}}/>
            <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
        </Stack>
    )
}