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
import { registerUser } from '../../services/auth';
import { addUser } from '../../database/firestoreCRUD';
import { styles } from '../styles';

const SignupScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmError, setConfirmError] = useState('');
    const [generalError, setGeneralError] = useState('');

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSignup = async () => {
        setEmailError('');
        setPasswordError('');
        setConfirmError('');
        setGeneralError('');
        setUsernameError('');
        setLoading(true);

        const trimmedUsername = username.trim();

        if (!trimmedUsername) {
            setUsernameError('Please enter a valid username.');
            setLoading(false);
            return;
        }

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

        if (password !== confirmPassword) {
            setConfirmError('Passwords do not match.');
            setLoading(false);
            return;
        }

        const result = await registerUser(email, password);

        if (result.success) {
            await addUser({ email, username: trimmedUsername });
            setLoading(false);
            navigation.navigate('Login');
        } else {
            switch (result.message) {
                case 'This email is already registered.':
                case 'Please enter a valid email address.':
                    setEmailError(result.message);
                    break;
                case 'Password must be at least 6 characters.':
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
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                <View style={styles.container}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Image source={require('../../assets/rider.png')} style={styles.logo} />
                        <Text style={styles.appName}>Just EAT</Text>
                    </View>

                    <Text style={styles.heading}>Signup Screen</Text>

                    {/* Email */}
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
                            returnKeyType="next"
                        />
                    </View>
                    {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

                    {/* Username */}
                    <View style={styles.inputWrapper}>
                        <Icon name="account-outline" size={20} color="#024220" />
                        <TextInput
                            placeholder="User Name"
                            style={styles.input}
                            placeholderTextColor="#024220"
                            value={username}
                            onChangeText={setUsername}
                            autoCapitalize="none"
                            returnKeyType="next"
                        />
                    </View>
                    {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}

                    {/* Password */}
                    <View style={styles.inputWrapper}>
                        <Icon name="lock-outline" size={20} color="#024220" />
                        <TextInput
                            placeholder="Enter Password"
                            style={styles.input}
                            placeholderTextColor="#024220"
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                            autoCapitalize="none"
                            textContentType="password"
                            returnKeyType="next"
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

                    {/* Confirm Password */}
                    <View style={styles.inputWrapper}>
                        <Icon name="lock-outline" size={20} color="#024220" />
                        <TextInput
                            placeholder="Reenter Password"
                            style={styles.input}
                            placeholderTextColor="#024220"
                            secureTextEntry={!showConfirmPassword}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            autoCapitalize="none"
                            textContentType="password"
                            returnKeyType="done"
                        />
                        <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                            <Icon
                                name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
                                size={20}
                                color="#024220"
                                style={styles.eyeIcon}
                            />
                        </Pressable>
                    </View>
                    {confirmError ? <Text style={styles.errorText}>{confirmError}</Text> : null}

                    {/* General Error */}
                    {generalError ? <Text style={styles.errorText}>{generalError}</Text> : null}

                    {/* SignUp Button */}
                    <Pressable style={styles.primaryButton} onPress={handleSignup} disabled={loading}>
                        <Text style={styles.primaryButtonText}>SignUp</Text>
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

                    {/* Already a user */}
                    <View style={{ marginTop: 20, alignItems: 'center' }}>
                        <Text style={{ color: '#024220', fontSize: 14 }}>
                            Already a user?{' '}
                            <Text
                                style={{ fontWeight: '700', textDecorationLine: 'underline' }}
                                onPress={() => navigation.navigate('Login')}
                            >
                                LogIn
                            </Text>
                        </Text>
                    </View>
                </View>

                {/* Loader */}
                {loading && (
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size="large" color="#024220" />
                    </View>
                )}
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default SignupScreen;