
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { images } from '../../constants'

const Profile = () => {
  return (
    <SafeAreaView className="bg-main_background pb-14">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="p-5">
          <Text className="text-xl tracking-widest font-psemibold">Profile</Text>
        </View>
        <View className="flex-row items-center px-5 py-2">
          <View>
            <Image
              source={images.profile}
              className="w-[76px] h-[76px] rounded-full"
              resizeMode='contain'
            />
          </View>
          <View className="ml-4">
            <Text className="text-sm tracking-wide font-pmedium">Sagan Shrestha</Text>
            <Text className="mt-2 text-sm tracking-wide font-pmedium">077/BCA/025</Text>
          </View>
        </View>
        <View className="px-5 py-5 mx-5 mt-6 rounded-xl bg-slate-200">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-pmedium">Educational Details</Text>
            <TouchableOpacity>
              <Text className="text-sm font-pmedium text-primary">Edit</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="mt-3 text-sm tracking-wider font-pregular">Department: Bachelor of Computer Application (BCA)</Text>
            <Text className="mt-3 text-sm tracking-wider font-pregular">Semester: 6</Text>
            <Text className="mt-3 text-sm tracking-wider font-pregular">Roll No: 25</Text>
            <Text className="mt-3 text-sm tracking-wider font-pregular">TU Registration No: 6-2-1180-22-2020</Text>
            <Text className="mt-3 text-sm tracking-wider font-pregular">Academic Year: 2077 (2020)</Text>
          </View>
        </View>
        <View className="px-5 py-5 mx-5 mt-6 rounded-xl bg-slate-200">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-pmedium">About</Text>
            <TouchableOpacity>
              <Text className="text-sm font-pmedium text-primary">Edit</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="mt-3 text-sm tracking-wider font-pregular">Name: Sagan Shrestha</Text>
            <Text className="mt-3 text-sm tracking-wider font-pregular">Gender: Male</Text>
            <Text className="mt-3 text-sm tracking-wider font-pregular">Date of Birth: 2002-10-05</Text>
          </View>
        </View>
        <View className="px-5 py-5 mx-5 mt-6 mb-10 rounded-xl bg-slate-200">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-pmedium">Contact Details</Text>
            <TouchableOpacity>
              <Text className="text-sm font-pmedium text-primary">Edit</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="mt-3 text-sm tracking-wider font-pregular">Mobile: 9840195868</Text>
            <Text className="mt-3 text-sm tracking-wider font-pregular">Email: saganshrestha01@gmail.com</Text>
            <Text className="mt-3 text-sm tracking-wider font-pregular">Address: Sanchal Marg, Sanepa, Lalitpur</Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#f5f5f5' style='light' />
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})