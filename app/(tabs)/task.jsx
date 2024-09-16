
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton';
import { Colors } from '../../constants/Colors';

const Task = () => {
  return (
    <SafeAreaView className="bg-main_background mb-14">
      <ScrollView>
        <View className="p-5">
          <Text className="text-xl tracking-widest font-psemibold">Task</Text>
        </View>
        <View className="px-5 mb-10">

          <View className="w-full p-5 mt-2 rounded-lg bg-slate-200">
            <View className="flex-row items-center justify-between">
              <View className=" flex-row justify-start items-center h-full w-[10%]">
                <Octicons name="dot-fill" size={26} color={Colors.primary} />
              </View>
              <View className="w-[90%]">
                <Text className="text-sm tracking-widest text-primary font-pmedium">Mobile Programming</Text>
                <Text className="mt-3 text-sm font-pregular">Task Name</Text>
              </View>
            </View>
            <View className="flex-row items-center justify-between">
              <View className=" flex-row justify-center items-center h-full w-[10%]">
                {/* <Octicons name="dot-fill" size={26} color={Colors.primary} /> */}
              </View>
              <View className="w-[90%]">
                <View className="flex-row items-center justify-start gap-1 mt-3">
                  <Ionicons name="time-outline" size={18} color={Colors.third} />
                  <Text className="mt-2 text-xs font-pregular text-red">08/06/2024</Text>
                </View>
                <CustomButton
                  title="Upload File"
                  // handlePress={ () => router.push('/login') }
                  containerStyles="bg-third border-[#34d8b9] rounded-lg px-4 mt-4"
                  textStyles={"text-white text-sm font-pmedium tracking-widest"}
                />
                <CustomButton
                  title="SUBMIT"
                  // handlePress={ () => router.push('/login') }
                  containerStyles="bg-primary rounded-lg px-4 mt-4"
                  textStyles={"text-white text-sm font-pmedium tracking-widest"}
                />
              </View>
            </View>
          </View>

          <View className="w-full p-5 mt-8 rounded-lg bg-slate-200">
            <View className="flex-row items-center justify-between">
              <View className=" flex-row justify-start items-center h-full w-[10%]">
                <Octicons name="dot-fill" size={26} color={Colors.primary} />
              </View>
              <View className="w-[90%]">
                <Text className="text-sm tracking-widest text-primary font-pmedium">Mobile Programming</Text>
                <Text className="mt-3 text-sm font-pregular">Task Name</Text>
              </View>
            </View>
            <View className="flex-row items-center justify-between">
              <View className=" flex-row justify-center items-center h-full w-[10%]">
                {/* <Octicons name="dot-fill" size={26} color={Colors.primary} /> */}
              </View>
              <View className="w-[90%]">
                <View className="flex-row items-center justify-start gap-1 mt-3">
                  <Ionicons name="time-outline" size={18} color={Colors.third} />
                  <Text className="mt-2 text-xs font-pregular text-red">08/06/2024</Text>
                </View>
                <CustomButton
                  title="Upload File"
                  // handlePress={ () => router.push('/login') }
                  containerStyles="bg-third border-[#34d8b9] rounded-lg px-4 mt-4"
                  textStyles={"text-white text-sm font-pmedium tracking-widest"}
                />
                <CustomButton
                  title="SUBMIT"
                  // handlePress={ () => router.push('/login') }
                  containerStyles="bg-primary rounded-lg px-4 mt-4"
                  textStyles={"text-white text-sm font-pmedium tracking-widest"}
                />
              </View>
            </View>
          </View>

          <View className="w-full p-5 mt-8 rounded-lg bg-slate-200">
            <View className="flex-row items-center justify-between">
              <View className=" flex-row justify-start items-center h-full w-[10%]">
                <Octicons name="dot-fill" size={26} color={Colors.primary} />
              </View>
              <View className="w-[90%]">
                <Text className="text-sm tracking-widest text-primary font-pmedium">Mobile Programming</Text>
                <Text className="mt-3 text-sm font-pregular">Task Name</Text>
              </View>
            </View>
            <View className="flex-row items-center justify-between">
              <View className=" flex-row justify-center items-center h-full w-[10%]">
                {/* <Octicons name="dot-fill" size={26} color={Colors.primary} /> */}
              </View>
              <View className="w-[90%]">
                <View className="flex-row items-center justify-start gap-1 mt-3">
                  <Ionicons name="time-outline" size={18} color={Colors.third} />
                  <Text className="mt-2 text-xs font-pregular text-red">08/06/2024</Text>
                </View>
                <CustomButton
                  title="Upload File"
                  // handlePress={ () => router.push('/login') }
                  containerStyles="bg-third border-[#34d8b9] rounded-lg px-4 mt-4"
                  textStyles={"text-white text-sm font-pmedium tracking-widest"}
                />
                <CustomButton
                  title="SUBMIT"
                  // handlePress={ () => router.push('/login') }
                  containerStyles="bg-primary rounded-lg px-4 mt-4"
                  textStyles={"text-white text-sm font-pmedium tracking-widest"}
                />
              </View>
            </View>
          </View>

          <View className="w-full p-5 mt-8 rounded-lg bg-slate-200">
            <View className="flex-row items-center justify-between">
              <View className=" flex-row justify-start items-center h-full w-[10%]">
                <Octicons name="dot-fill" size={26} color={Colors.primary} />
              </View>
              <View className="w-[90%]">
                <Text className="text-sm tracking-widest text-primary font-pmedium">Mobile Programming</Text>
                <Text className="mt-3 text-sm font-pregular">Task Name</Text>
              </View>
            </View>
            <View className="flex-row items-center justify-between">
              <View className=" flex-row justify-center items-center h-full w-[10%]">
                {/* <Octicons name="dot-fill" size={26} color={Colors.primary} /> */}
              </View>
              <View className="w-[90%]">
                <View className="flex-row items-center justify-start gap-1 mt-3">
                  <Ionicons name="time-outline" size={18} color={Colors.third} />
                  <Text className="mt-2 text-xs font-pregular text-red">08/06/2024</Text>
                </View>
                <CustomButton
                  title="Upload File"
                  // handlePress={ () => router.push('/login') }
                  containerStyles="bg-third border-[#34d8b9] rounded-lg px-4 mt-4"
                  textStyles={"text-white text-sm font-pmedium tracking-widest"}
                />
                <CustomButton
                  title="SUBMIT"
                  // handlePress={ () => router.push('/login') }
                  containerStyles="bg-primary rounded-lg px-4 mt-4"
                  textStyles={"text-white text-sm font-pmedium tracking-widest"}
                />
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
      <StatusBar backgroundColor='#f5f5f5' />
    </SafeAreaView>
  )
}

export default Task

const styles = StyleSheet.create({})