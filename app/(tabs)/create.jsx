import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Create = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View>
        <Text className="font-pmedium text-sm text-gray-100">
          Create
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Create