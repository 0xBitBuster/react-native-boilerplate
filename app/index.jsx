import { Text, View, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { images } from "../constants"
import { useGlobalContext } from "../context/GlobalProvider";
import Button from "../components/Button";

const App = () => {
  const { isLoading, user } = useGlobalContext()

  if (!isLoading && user)
    return <Redirect href="/home" />

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%"}}>
        <View className="w-full min-h-[85vh] justify-center items-center px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image 
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white text-center font-bold">
              Discover Endless Possibilities with <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image 
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="font-pregular text-xs text-gray-100 text-center mt-7">Where creativity meets innovation: embark on a journey of limitless exploration with Aora</Text>

          <Button 
            title="Continue with Email" 
            onPress={() => router.push("/sign-in")} 
            containerStyle="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default App;
