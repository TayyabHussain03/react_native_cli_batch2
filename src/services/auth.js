import { getAuth, createUserWithEmailAndPassword } from '@react-native-firebase/auth';
import { getApp } from '@react-native-firebase/app';

export const registerUser = async (email, password) => {
    try {
        const auth = getAuth(getApp()); // ✅ Modular API: get auth instance from app

        const userCredential = await createUserWithEmailAndPassword(auth, email, password); // ✅ Modular method
        const user = userCredential.user;
        console.log('User registered:', user.email);
        return { success: true, user };
    } catch (error) {
        let message = '';

        switch (error.code) {
            case 'auth/email-already-in-use':
                message = 'This email is already registered.';
                break;
            case 'auth/invalid-email':
                message = 'Please enter a valid email address.';
                break;
            case 'auth/weak-password':
                message = 'Password must be at least 6 characters.';
                break;
            case 'auth/network-request-failed':
                message = 'Network error. Please check your connection.';
                break;
            default:
                message = error.message;
                break;
        }

        return { success: false, message };
    }
};