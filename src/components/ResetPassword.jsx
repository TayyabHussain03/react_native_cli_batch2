import React, { useState } from 'react';
import {
    View, Text, TextInput, Pressable, Alert, StyleSheet,
} from 'react-native';
import { resetPassword } from '../services/auth'; // ✅ Function from auth.js

const ResetPassword = () => {
    const [email, setEmail] = useState('');

    const handleReset = async () => {
        if (!email) {
            Alert.alert('Error', 'Please enter your email.');
            return;
        }

        try {
            const result = await resetPassword(email);

            if (result.success) {
                Alert.alert('Success', result.message);
                setEmail('');
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
                <Text style={styles.title}>Reset Password</Text>

                <TextInput
                    placeholder="Enter your email"
                    placeholderTextColor="#7c3aed"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Pressable onPress={handleReset} style={styles.button}>
                    <Text style={styles.buttonText}>Send Reset Link</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default ResetPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#e0e7ff',
    },
    card: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: 'rgba(255,255,255,0.85)',
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
        backgroundColor: '#7c3aed',
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
});