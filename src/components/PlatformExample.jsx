import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const PlatformExample = () => {
    return (
        <View style={styles.container}>
            {/* ✅ Platform.OS se text conditionally render ho raha hai */}
            <Text style={styles.title}>
                {Platform.OS === 'android' ? 'Welcome to Android' : 'Welcome to iOS'}
            </Text>

            {/* ✅ Platform.select se styling aur message platform-specific ho raha hai */}
            <Text style={Platform.select({
                ios: styles.iosText,
                android: styles.androidText
            })}>
                {Platform.OS === 'android' ? 'Hello I am Android User' : 'Hello I am iOS User'}
            </Text>
        </View>
    );
};

export default PlatformExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Platform.select({
            ios: '#f1f2f6',
            android: '#dff9fb'
        }),
        padding: 20
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#2f3640'
    },
    iosText: {
        fontSize: 18,
        color: '#3742fa',
        fontStyle: 'italic'
    },
    androidText: {
        fontSize: 18,
        color: '#20bf6b',
        fontWeight: '600'
    }
});