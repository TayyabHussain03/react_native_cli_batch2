import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const PUT_API = () => {
    const [form, setForm] = useState({ id: '', name: '', email: '' });

    const handleChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    const handleUpdate = async () => {
        if (!form.id || !form.name || !form.email) {
            Alert.alert('Missing Fields', 'Please fill all fields before updating.');
            return;
        }

        try {
            const response = await axios.put(`http://192.168.0.110:3000/users/${form.id}`, {
                name: form.name,
                email: form.email
            });

            console.log('Update Response:', response.data);
            Alert.alert('Success', 'User updated successfully!');
            setForm({ id: '', name: '', email: '' });
        } catch (error) {
            console.error('PUT Error:', error);
            Alert.alert('Error', 'Failed to update user.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Update User</Text>

            <TextInput
                style={styles.input}
                placeholder="User ID"
                value={form.id}
                onChangeText={(text) => handleChange('id', text)}
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                placeholder="New Name"
                value={form.name}
                onChangeText={(text) => handleChange('name', text)}
            />

            <TextInput
                style={styles.input}
                placeholder="New Email"
                value={form.email}
                onChangeText={(text) => handleChange('email', text)}
                keyboardType="email-address"
            />

            <TouchableOpacity style={styles.button} onPress={handleUpdate} activeOpacity={0.7}>
                <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PUT_API;

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