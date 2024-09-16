
import { StatusBar } from 'expo-status-bar'
import { Text, View, ScrollView } from 'react-native'
import { Link, Redirect, router } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from './../components/CustomButton';

const index = () => {
  return (
    <SafeAreaView className="bg-main_background h-full" >
      <ScrollView contentContainerStyle={{ height: '100%' }} >
        <View className="w-full justify-center items-center h-full px-4">
          <Text className="text-3xl text-primary font-bold text-center" >
            Welcome to College App
          </Text>
          <Text className="text-1xl text-black mt-6 font-bold text-center" >
            LET ACCESS ALL WORK FROM HERE
          </Text>
          <CustomButton
            title="Login"
            handlePress={ () => router.push('/login') }
            containerStyles="w-[90%] mt-8"
            textStyles="tracking-widest"
          />
          <CustomButton
            title="Sign Up"
            handlePress={ () => router.push('/sign-up') }
            containerStyles="w-[90%] mt-6"
            textStyles="tracking-widest"
          />
        <Link href="/home" className='mt-10'>Go to Home</Link>
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#f5f5f5' style='light' />
    </SafeAreaView>
  )
}

export default index
