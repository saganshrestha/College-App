
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Calendar } from 'react-native-calendars'
import { router } from 'expo-router'

const Attendance = () => {
    return (
        <SafeAreaView className="bg-main_background mb-14">
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="px-5 pt-5 pb-2">
                    <Text className="text-xl tracking-widest font-psemibold">Attendance</Text>
                </View>
0
                <View className="px-5 pb-2">
                    {/* <View className="flex flex-row items-center justify-between">
                        <Text className="text-lg font-pmedium">Attendance</Text>
                        <TouchableOpacity onPress={() => router.push('home/attendance')}>
                            <Text className="text-sm font-pmedium text-primary">View in Detail</Text>
                        </TouchableOpacity>
                    </View> */}
                    <TouchableOpacity
                        onPress={() => router.push('home/attendance')}
                        className="w-full px-5 py-4 mt-4 rounded-lg bg-slate-200">
                        <View className="flex-row items-center justify-between">
                            <Text className="mt-2 mb-3 text-sm tracking-widest text-primary font-pmedium w-[66%]">Subjects</Text>
                            <Text className="mt-2 mb-3 text-sm tracking-widest text-primary font-pmedium w-[34%] text-center">Attendance</Text>
                        </View>
                        <View className="flex-row items-center justify-between">
                            <Text className="my-2 text-sm tracking-wider font-pmedium w-[66%]">Distributed System</Text>
                            <Text className="my-2 text-sm tracking-wider font-pmedium w-[34%] text-center">74%</Text>
                        </View>
                        <View className="flex-row items-center justify-between">
                            <Text className="my-2 text-sm tracking-wider font-pmedium w-[66%]">Applied Economics</Text>
                            <Text className="my-2 text-sm tracking-wider font-pmedium w-[34%] text-center">100%</Text>
                        </View>
                        <View className="flex-row items-center justify-between">
                            <Text className="my-2 text-sm tracking-wider font-pmedium w-[66%]">Mobile Programming</Text>
                            <Text className="my-2 text-sm tracking-wider font-pmedium w-[34%] text-center">92%</Text>
                        </View>
                        <View className="flex-row items-center justify-between">
                            <Text className="my-2 text-sm tracking-wider font-pmedium w-[66%]">Network Programming</Text>
                            <Text className="my-2 text-sm tracking-wider font-pmedium w-[34%] text-center">86%</Text>
                        </View>
                        <View className="flex-row items-center justify-between">
                            <Text className="my-2 text-sm tracking-wider font-pmedium w-[66%]">Advanced Java Programming</Text>
                            <Text className="my-2 text-sm tracking-wider font-pmedium w-[34%] text-center">76%</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Calendar
                    style={{
                        margin: 20,
                        borderRadius: 10,
                        elevation: 1
                    }}
                    hideExtraDays={true}
                />
            </ScrollView>
            <StatusBar backgroundColor='#f5f5f5' style='light' />
        </SafeAreaView>
    )
}

export default Attendance

