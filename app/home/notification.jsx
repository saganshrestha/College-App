
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

const Notification = () => {
  return (
    <SafeAreaView className="bg-main_background">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="p-5">
          <Text className="text-xl tracking-widest font-psemibold">Notifications</Text>
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#f5f5f5' style='light' />
    </SafeAreaView>
  )
}

export default Notification