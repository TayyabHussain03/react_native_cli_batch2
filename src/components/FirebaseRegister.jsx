import React, { useState } from 'react';
import {
    View, Text, TextInput, Pressable, Alert, StyleSheet,
} from 'react-native';
import { registerUser } from '../services/auth'

const FirebaseRegister = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        if (!email || !password || !confirmPassword) {
            Alert.alert('Error', 'Please fill all fields.');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match.');
            return;
        }

        try {
            const result = await registerUser(email, password);

            if (result.success) {
                Alert.alert('Success', `Registered as ${result.user.email}`);
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                navigation.navigate('Login')
            } else {
                Alert.alert('Error', result.message);
            }
        } catch (err) {
            Alert.alert('Error', 'Something went wrong.');
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Create Account</Text>

                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#7c3aed" // ✅ Purple placeholder
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#7c3aed"
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    secureTextEntry
                />

                <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor="#7c3aed"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    style={styles.input}
                    secureTextEntry
                />

                <Pressable onPress={handleRegister} style={styles.button}>
                    <Text style={styles.buttonText}>Register</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.linkText}>Already a member? Sign in</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default FirebaseRegister;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#e0e7ff', // ✅ Light bluish background
    },
    card: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: 'rgba(255,255,255,0.85)', // ✅ Glass effect
        borderRadius: 24,
        padding: 24,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: '#1e293b',
        textAlign: 'center',
        marginBottom: 24,
        letterSpacing: 1,
    },
    input: {
        backgroundColor: '#f8fafc',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
        marginBottom: 16,
        fontSize: 16,
        color: '#1e293b',
        borderWidth: 1,
        borderColor: '#cbd5e1',
    },
    button: {
        backgroundColor: 'linear-gradient(90deg, #7c3aed, #6366f1)', // ✅ Gradient fallback
        backgroundColor: '#7c3aed', // ✅ Purple fallback
        paddingVertical: 14,
        borderRadius: 999,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
    linkText: {
        marginTop: 16,
        textAlign: 'center',
        color: '#7c3aed',
        fontSize: 14,
        fontWeight: '500',
        textDecorationLine: 'underline',
    },

});
