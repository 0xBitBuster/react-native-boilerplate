import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, View } from 'react-native'

const Bookmark = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View>
        <Text className="font-pmedium text-sm text-gray-100">
          Bookmark
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Bookmark