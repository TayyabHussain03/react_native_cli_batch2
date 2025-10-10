import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const LoginForm = () => {
    // ✅ useState hooks for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // ✅ Function called on login button press
    const handleLogin = () => {
        Alert.alert(
            'Login Successful',
            `Email: ${email}\nPassword: ${password}` // ✅ Message as a single string
        );
        setEmail('');
        setPassword('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            {/* ✅ Email Input Field */}
            <TextInput
                style={styles.input}
                value={email} // ✅ Required: current value of input
                onChangeText={setEmail} // ✅ Required: updates state on text change
                placeholder="Email" // ✅ Optional: hint text
                placeholderTextColor="#aaa" // ✅ Optional: color of placeholder
                keyboardType="email-address" // ✅ Optional: shows @ keyboard
                autoCapitalize="none" // ✅ Optional: disables auto-capitalization
            />

            {/* ✅ Password Input Field */}
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                placeholderTextColor="#aaa"
                autoCapitalize="none" // ✅ Optional: disables auto-capitalization
                secureTextEntry={true} // ✅ Optional: hides password characters
            />

            {/* ✅ Login Button */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginForm;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
        backgroundColor: '#f2f2f2'
    },

    heading: {
        textAlign: "center",
        fontSize: 26,
        fontWeight: 'bold',
        color: '#4a90e2',
        paddingVertical: 15,
    },

    input: {
        backgroundColor: '#fff',
        padding: 12,
        marginVertical: 10,
        borderRadius: 8,
        fontSize: 16,
        borderColor: '#ccc',
        borderWidth: 1,
        color: 'black'
    },
    button: {
        backgroundColor: '#4a90e2',
        paddingVertical: 14,
        borderRadius: 8,
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '600'
    }
});