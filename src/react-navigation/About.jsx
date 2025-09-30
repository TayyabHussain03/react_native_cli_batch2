import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const About = ({ route, navigation }) => {
    const { username } = route.params; // ✅ Receiving username from Login screen
    const handleGoBack = () => {
        navigation.goBack(); // ✅ This takes user back to the previous screen (Login or Home)
    };


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>About This App</Text>

            <Image
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={styles.logo}
            />

            <Text style={styles.description}>
                This React Native app is built to demonstrate navigation, API integration, and beautiful UI components. It’s fast, scalable, and designed for modern mobile experiences.
            </Text>

            <Text style={styles.footer}>Made with ❤️ by {username}</Text>

            <TouchableOpacity style={styles.button} onPress={handleGoBack} activeOpacity={0.7}>
                <Text style={styles.buttonText}>⬅ Go Back</Text>
            </TouchableOpacity>


        </View>
    );
};

export default About;


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
    logo: {
        width: 80,
        height: 80,
        marginBottom: 20,
        borderRadius: 40,
        backgroundColor: '#dcdde1'
    },
    description: {
        fontSize: 16,
        color: '#636e72',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 30,
        paddingHorizontal: 10
    },
    footer: {
        fontSize: 14,
        color: '#00a8ff',
        fontStyle: 'italic'
    },
    button: {
        backgroundColor: '#e84118',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
        elevation: 3
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }

});