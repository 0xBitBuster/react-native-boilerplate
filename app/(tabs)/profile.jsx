import { SafeAreaView } from 'react-native-safe-area-context'
import { useGlobalContext } from "../../context/GlobalProvider"
import { router } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

const Profile = () => {
  const { user, setUser } = useGlobalContext()

  const logout = async() => {
    setUser(null);
    router.replace("/sign-in")
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <View>
        <Text className="font-pmedium text-sm text-gray-100">
          Welcome Back,
        </Text>
        <Text className="text-2xl font-psemibold text-white">
          {user?.username}
        </Text>
      </View>
      <TouchableOpacity onPress={logout}>
        <Text className="text-red-600">Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Profile