import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    ActivityIndicator,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { resetPassword } from '../../services/auth';
import { styles } from '../styles';

const ResetPassword = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [generalError, setGeneralError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleReset = async () => {
        setEmailError('');
        setGeneralError('');
        setLoading(true);

        if (!email.trim()) {
            setEmailError('Please enter your email.');
            setLoading(false);
            return;
        }

        const result = await resetPassword(email);

        if (result.success) {
            setLoading(false);
            Alert.alert(
                'Reset Link Sent',
                `A password reset link has been sent to ${email}. Please check your inbox or spam folder.`,
                [{ text: 'OK' }]
            );
        } else {
            switch (result.message) {
                case 'No account found with this email.':
                case 'Invalid email format.':
                case 'Please enter your email.':
                    setEmailError(result.message);
                    break;
                default:
                    setGeneralError(result.message);
                    break;
            }
            setLoading(false);
        }
    };


    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image source={require('../../assets/rider.png')} style={styles.logo} />
                        <Text style={styles.appName}>Just EAT</Text>
                    </View>

                    <Text style={styles.heading}>Reset Password</Text>

                    <View style={styles.inputWrapper}>
                        <Icon name="email-outline" size={20} color="#024220" />
                        <TextInput
                            placeholder="Enter Email Address"
                            style={styles.input}
                            placeholderTextColor="#024220"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                        />
                    </View>
                    {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                    {generalError ? <Text style={styles.errorText}>{generalError}</Text> : null}

                    <Pressable style={styles.primaryButton} onPress={handleReset} disabled={loading}>
                        <Text style={styles.primaryButtonText}>Send Reset Link</Text>
                    </Pressable>
                </View>

                {loading && (
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size="large" color="#024220" />
                    </View>
                )}
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default ResetPassword;