import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const POST_API = () => {
    const [form, setForm] = useState({ id: '', name: '', email: '' });

    const handleChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://192.168.0.110:3000/users', form);
            console.log('Response:', response.data);
            Alert.alert('Success', 'User created successfully!');
            setForm({ id: '', name: '', email: '' }); // ✅ Reset form
        } catch (error) {
            console.error('POST Error:', error);
            Alert.alert('Error', 'Something went wrong!');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Create User</Text>

            <TextInput
                style={styles.input}
                placeholder="ID"
                placeholderTextColor="#D3D3D3"
                value={form.id}
                onChangeText={(text) => handleChange('id', text)}
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#D3D3D3"
                value={form.name}
                onChangeText={(text) => handleChange('name', text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#D3D3D3"
                value={form.email}
                onChangeText={(text) => handleChange('email', text)}
                keyboardType="email-address"
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit} activeOpacity={0.7}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default POST_API;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6fa',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#2f3640',
        marginBottom: 20
    },
    input: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 14,
        marginBottom: 12,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#dcdde1',
        elevation: 2
    },
    button: {
        backgroundColor: '#00a8ff',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 10,
        elevation: 3,
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});