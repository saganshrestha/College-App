
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const SearchInput = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    return (
        <View className="flex-row items-center w-full h-12 px-4 space-x-4 border border-gray-600 rounded-xl focus:border-primary">
            <TextInput
                className="flex-1 mt-1 text-base tracking-widest text-primary font-pregular"
                value={value}
                placeholder="Search"
                placeholderTextColor="#7b7b8b"
                onChangeText={handleChangeText}
                secureTextEntry={title === 'Password' && !showPassword}
            />
            <TouchableOpacity>
                <Ionicons name="search-outline" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default SearchInput