
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const FormField = ( {title, value, placeholder, handleChangeText, otherStyles, ...props} ) => {

    const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-600 font-pmedium">
        {title}
      </Text>
      <View className="border border-gray-600 w-full h-14 px-4 bg-black-100 rounded-xl focus:border-primary items-center flex-row">
        <TextInput
            className="flex-1 text-gray-600 font-psemibold text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === 'Password' && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} >
                {!showPassword ? <Ionicons name="eye-outline" size={24} color="black" /> : <Ionicons name="eye-off-outline" size={24} color="black" />}
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField