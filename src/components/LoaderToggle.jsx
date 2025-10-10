import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

const LoaderToggle = () => {
    const [loading, setLoading] = useState(false);

    const toggleLoader = () => {
        setLoading(!loading);
    };

    return (
        <View style={styles.container}>
            {/* ✅ Button to toggle loader */}
            <TouchableOpacity style={styles.button} onPress={toggleLoader} activeOpacity={0.7}>
                <Text style={styles.buttonText}>
                    {loading ? 'Hide Loader' : 'Show Loader'}
                </Text>
            </TouchableOpacity>

            {/* ✅ Loader and Loading text shown only when loading is true */}
            {loading && (
                <View style={styles.loaderBox}>
                    <ActivityIndicator size="large" color="#3498db" />
                    <Text style={styles.loadingText}>Loading...</Text>
                </View>
            )}
        </View>
    );
};

export default LoaderToggle;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // ✅ Vertically center
        alignItems: 'center',     // ✅ Horizontally center
        backgroundColor: '#f2f2f2',
        padding: 20
    },
    button: {
        backgroundColor: '#2ecc71',
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginBottom: 30,
        elevation: 3
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    loaderBox: {
        alignItems: 'center'
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        fontStyle: 'italic',
        color: '#555'
    }
});