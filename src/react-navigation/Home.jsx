import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>🏠 Welcome to Home</Text>

            <Text style={styles.description}>
                This is the main screen of your React Native app. From here, you can explore other screens like About, Profile, or Settings.
            </Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
                <Text style={styles.buttonText}>Go to About Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6fa',
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2f3640',
        marginBottom: 20
    },
    description: {
        fontSize: 16,
        color: '#636e72',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 30,
        paddingHorizontal: 10
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
    }
});