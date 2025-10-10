import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const AlertExample = () => {
    const showAlert = () => {
        Alert.alert(
            'Delete Confirmation', // ✅ Title of the alert
            'Are you sure you want to delete this item?', // ✅ Message body

            // ✅ Array of buttons
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel' // ✅ iOS-specific style for cancel button
                },
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed')
                }
            ],

            {
                cancelable: false // ✅ Prevents alert from closing when tapping outside
            }
        );
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={showAlert}>
                <Text style={styles.buttonText}>Show Alert</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AlertExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2'
    },
    button: {
        backgroundColor: '#e74c3c',
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 10,
        elevation: 3
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});