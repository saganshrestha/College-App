import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const Login = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = () => {

    }

  return (
    <SafeAreaView className="bg-main_background h-full">
        <ScrollView>
            <View className="w-full h-[85vh] justify-center px-6 my-6">
                <Text className="text-2xl text-primary font-pbold">Log in to College App</Text>
                <FormField
                    title="Email"
                    value={form.email}
                    handleChangeText={(e) => setForm({ ...form, email: e })}
                    keyboardType="email-address"
                    otherStyles="mt-8"
                />
                <FormField
                    title="Password"
                    value={form.password}
                    handleChangeText={(e) => setForm({ ...form, password: e })}
                    otherStyles="mt-6"
                />
                <CustomButton
                    title="Login"
                    handlePress={submit}
                    containerStyles="mt-10 bg-main_background"
                    isLoading={isSubmitting}
                    textStyles="tracking-widest"
                />
                <View className="justify-center pt-6 flex-row gap-2">
                    <Text className="text-lg text-gray-600 font-pregular">
                        Don't have an account?
                    </Text>
                    <Link href="/sign-up" className="text-lg font-psemibold text-primary">
                        Sign Up
                    </Link>
                </View>
            </View>
        </ScrollView>
        <StatusBar backgroundColor='#f5f5f5' style='light' />
    </SafeAreaView>
  )
}

export default Login