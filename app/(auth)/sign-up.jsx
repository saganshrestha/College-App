import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignUp = () => {

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = () => {

    }

  return (
    <SafeAreaView className="bg-main_background h-full">
        <ScrollView>
            <View className="w-full h-[86vh] justify-center px-6 my-6">
                <Text className="text-2xl text-primary font-pbold">Sign up to College App</Text>
                <FormField
                    title="Username"
                    value={form.username}
                    handleChangeText={(e) => setForm({ ...form, username: e })}
                    otherStyles="mt-8"
                />
                <FormField
                    title="Email"
                    value={form.email}
                    handleChangeText={(e) => setForm({ ...form, email: e })}
                    keyboardType="email-address"
                    otherStyles="mt-6"
                />
                <FormField
                    title="Password"
                    value={form.password}
                    handleChangeText={(e) => setForm({ ...form, password: e })}
                    otherStyles="mt-6"
                />
                <CustomButton
                    title="Sign Up"
                    handlePress={submit}
                    containerStyles="mt-10 bg-main_background"
                    isLoading={isSubmitting}
                    textStyles="tracking-widest"
                />
                <View className="justify-center pt-6 flex-row gap-2">
                    <Text className="text-lg text-gray-600 font-pregular">
                        Have an account already?
                    </Text>
                    <Link href="/login" className="text-lg font-psemibold text-primary">
                        Login
                    </Link>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp