import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View>
        <Text className="font-pmedium text-sm text-gray-100">
          Home
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Home