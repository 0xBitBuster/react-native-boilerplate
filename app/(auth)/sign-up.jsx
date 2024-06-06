import { View, Text, ScrollView, Image, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { Link, router } from 'expo-router'

import { images } from '../../constants'
import FormField from '../../components/FormField'
import Button from '../../components/Button'

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: '',
    username: ''
  })

  const submit = async() => {
    if (!form.username || !form.email || !form.username) {
      return Alert.alert("Error", "Please fill in all the fields");
    }
    
    setIsSubmitting(true)
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

          <Text className="text-2xl text-white font-psemibold mt-10">
            Sign up to Aora
          </Text>

          <FormField 
            title="Username"
            value={form.username}
            onChangeText={(e) => setForm({ ...form, username: e })}
            style="mt-10"
          />
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
            title="Sign Up"
            onPress={submit}
            containerStyle="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?
            </Text>
            <Link href="/sign-in" className='text-lg font-psemibold text-secondary'>
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp