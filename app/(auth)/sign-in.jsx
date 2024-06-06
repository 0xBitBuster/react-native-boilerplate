import { View, Text, ScrollView, Image, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { Link, router } from 'expo-router'

import FormField from '../../components/FormField'
import Button from '../../components/Button'
import { images } from '../../constants'
import { useGlobalContext } from '../../context/GlobalProvider'

const SignIn = () => {
  const { setUser } = useGlobalContext()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const submit = async() => {
    if (!form.password || !form.email) {
      return Alert.alert("Error", "Please fill in all the fields");
    }
    
    setIsSubmitting(true);
    setUser({
      $id: "1",
      username: "johndoe"
    })
    setIsSubmitting(false)

    router.replace("/home")
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image 
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[35px]"
          />

          <Text className="text-2xl text-white font-psemibold mt-10">Log in to Aora</Text>

          <FormField 
            title="Email"
            value={form.email}
            onChangeText={(e) => setForm({ ...form, email: e })}
            style="mt-7"
            keyboardType="email-address"
          />
          <FormField 
            title="Password"
            value={form.password}
            onChangeText={(e) => setForm({ ...form, password: e })}
            style="mt-7"
          />
          
          <Button 
            title="Sign In"
            onPress={submit}
            containerStyle="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link href="/sign-up" className='text-lg font-psemibold text-secondary'>
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn