import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const NativewindLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View className="flex-1 justify-center items-center bg-gray-900 px-6">
            {/* ✅ Welcome Text */}
            <Text className="text-white text-3xl font-bold mb-6">Welcome back!</Text>


            <TextInput
                placeholder="Enter your email"
                placeholderTextColor="gray"
                className="w-full h-12 bg-gray-800 rounded-lg px-4 text-white mb-4"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                placeholder="Enter your password"
                placeholderTextColor="gray"
                className="w-full h-12 bg-gray-800 rounded-lg px-4 text-white mb-4"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            {/* ✅ TouchableOpacity Login Button */}
            <TouchableOpacity className="w-full bg-indigo-500 py-3 rounded-lg">
                <Text className="text-center text-white text-lg font-bold">Login</Text>
            </TouchableOpacity>

            {/* ✅ Forgot Password Link */}
            <TouchableOpacity className="mt-4">
                <Text className="text-indigo-300 text-center">Forgot Password?</Text>
            </TouchableOpacity>

            {/* ✅ Signup Prompt */}
            <View className="mt-6 flex-row justify-center">
                <Text className="text-white">Don't have an account? </Text>
                <TouchableOpacity>
                    <Text className="text-indigo-400 font-semibold">Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default NativewindLogin;