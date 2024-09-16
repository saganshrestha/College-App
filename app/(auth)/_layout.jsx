import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
        <Stack screenOptions={{headerShown: false}} >
            <Stack.Screen
                name='login'
            />
             <Stack.Screen
                name='sign-up'
            />
        </Stack>
        <StatusBar backgroundColor='#f5f5f5' style='light' />
    </>
  )
}

export default AuthLayout