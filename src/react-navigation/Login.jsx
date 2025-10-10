import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        if (!username.trim()) {
            Alert.alert('Validation', 'Please enter a username');
            return;
        }

        // ✅ Navigate to About screen and pass username via route params
        navigation.navigate('About', { username });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>🚀 Welcome</Text>

            <Text style={styles.subheading}>Enter your username to continue</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter Username"
                placeholderTextColor="#aaa"
                value={username}
                onChangeText={setUsername}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin} activeOpacity={0.7}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f2027',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#00b894',
        marginBottom: 10
    },
    subheading: {
        fontSize: 16,
        color: '#dfe6e9',
        marginBottom: 20
    },
    input: {
        width: '90%',
        backgroundColor: '#2d3436',
        color: '#dfe6e9',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#636e72'
    },
    button: {
        backgroundColor: '#00a8ff',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 10,
        elevation: 3
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 18,
        color: '#dfe6e9',
        textAlign: 'center',
        marginTop: 20
    },
    username: {
        fontWeight: 'bold',
        color: '#00cec9'
    }
});