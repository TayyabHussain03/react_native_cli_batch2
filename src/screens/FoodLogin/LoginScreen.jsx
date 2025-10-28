import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Image } from 'react-native';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles'

const LoginScreen = () => {
    const navigation = useNavigation();
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.container}>
                    {/* Logo and App Name */}
                    <View style={styles.header}>
                        <Image source={require('../../assets/rider.png')} style={styles.logo} />
                        <Text style={styles.appName}>Just EAT</Text>
                    </View>

                    <Text style={styles.heading}>Login Screen</Text>

                    {/* Email Input */}
                    <View style={styles.inputWrapper}>
                        <Icon name="email-outline" size={20} color="#024220" />
                        <TextInput placeholder="Enter Email Address" style={styles.input} placeholderTextColor="#024220" />
                    </View>

                    {/* Password Input */}
                    <View style={styles.inputWrapper}>
                        <Icon name="lock-outline" size={20} color="#024220" />
                        <TextInput placeholder="Password" style={styles.input} placeholderTextColor="#024220" secureTextEntry />
                    </View>

                    <Text style={styles.link}>Forgot Password?</Text>

                    {/* Login Button */}
                    <Pressable style={styles.primaryButton}>
                        <Text style={styles.primaryButtonText}>LogIn</Text>
                    </Pressable>

                    <Text style={styles.subText}>New user for Just EAT</Text>

                    {/* SignUp Button */}
                    <Pressable style={styles.secondaryButton}
                        onPress={() => navigation.navigate('Signup')}
                    >
                        <Text style={styles.secondaryButtonText}>SignUp Now</Text>
                    </Pressable>

                    {/* Social Buttons */}
                    <View style={styles.socialRow}>
                        <Pressable style={styles.socialButton}>
                            <Icon name="google" size={20} color="#024220" />
                            <Text style={styles.socialText}>Google</Text>
                        </Pressable>
                        <Pressable style={styles.socialButton}>
                            <Icon name="facebook" size={20} color="#024220" />
                            <Text style={styles.socialText}>Facebook</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;