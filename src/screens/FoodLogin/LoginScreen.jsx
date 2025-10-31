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
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '../../services/auth';
import { styles } from '../styles';

const LoginScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [generalError, setGeneralError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async () => {
        setEmailError('');
        setPasswordError('');
        setGeneralError('');
        setLoading(true);

        if (!email.includes('@')) {
            setEmailError('Please enter a valid email.');
            setLoading(false);
            return;
        }

        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters.');
            setLoading(false);
            return;
        }

        const result = await loginUser(email, password);

        if (result.success) {
            setLoading(false);
            navigation.reset({
                index: 0,
                routes: [{ name: 'BottomTabs' }],
            });
        } else {
            switch (result.message) {
                case 'No account found with this email.':
                case 'Invalid email format.':
                    setEmailError(result.message);
                    break;
                case 'Incorrect password.':
                    setPasswordError(result.message);
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

                    <Text style={styles.heading}>Login</Text>

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

                    <View style={styles.inputWrapper}>
                        <Icon name="lock-outline" size={20} color="#024220" />
                        <TextInput
                            placeholder="Password"
                            style={styles.input}
                            placeholderTextColor="#024220"
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                            autoCapitalize="none"
                            textContentType="password"
                        />
                        <Pressable onPress={() => setShowPassword(!showPassword)}>
                            <Icon
                                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                                size={20}
                                color="#024220"
                                style={styles.eyeIcon}
                            />
                        </Pressable>
                    </View>
                    {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                    {generalError ? <Text style={styles.errorText}>{generalError}</Text> : null}

                    <Text style={styles.link} onPress={() => navigation.navigate('ResetPassword')}>
                        Forgot Password?
                    </Text>

                    <Pressable android_ripple={{ color: '#ffffff30' }}
                        style={({ pressed }) => [
                            styles.primaryButton,
                            pressed && { opacity: 0.7 },
                        ]}
                        onPress={handleLogin} disabled={loading}>
                        <Text style={styles.primaryButtonText}>LogIn</Text>
                    </Pressable>

                    <Text style={styles.subText}>New user for Just EAT</Text>

                    <Pressable style={({ pressed }) => [
                        styles.secondaryButton,
                        pressed && { opacity: 0.7 },
                    ]}
                        onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.secondaryButtonText}>SignUp Now</Text>
                    </Pressable>

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

                {loading && (
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size="large" color="#024220" />
                    </View>
                )}
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;