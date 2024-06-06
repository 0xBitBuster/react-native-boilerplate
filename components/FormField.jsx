import { useState } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import { icons } from '../constants'

const FormField = ({ title, value, placeholder, onChangeText, style, ...props }) => {
  const [showPassword, setShowPassword] = useState(false)
  
  return (
    <View className={`space-y-2 ${style}`}>
      <Text className="text-base text-gray-100 font-pmedium">
        {title}
      </Text>

      <View className="flex-row items-center border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary">
        <TextInput 
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7b7b8b'
          onChangeText={onChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image 
              source={!showPassword ? icons.eye : icons.eyeHide} 
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField