import { Text, TouchableOpacity } from 'react-native'

const Button = ({ title, onPress, containerStyle, textStyle, isLoading }) => {
  return (
    <TouchableOpacity 
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${isLoading ? 'opacity-50' : ''}`}
      disabled={isLoading}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button