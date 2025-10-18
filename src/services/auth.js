import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail
} from '@react-native-firebase/auth';
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

export const loginUser = async (email, password) => {
    try {
        const auth = getAuth(getApp());
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user };
    } catch (error) {
        let message = '';
        switch (error.code) {
            case 'auth/user-not-found':
                message = 'No account found with this email.';
                break;
            case 'auth/wrong-password':
                message = 'Incorrect password.';
                break;
            case 'auth/invalid-email':
                message = 'Invalid email format.';
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

export const resetPassword = async (email) => {
    try {
        const auth = getAuth(getApp());

        await sendPasswordResetEmail(auth, email); // ✅ Firebase method to send reset link
        return { success: true, message: 'Password reset link sent to your email.' };
    } catch (error) {
        let message = '';

        switch (error.code) {
            case 'auth/user-not-found':
                message = 'No account found with this email.';
                break;
            case 'auth/invalid-email':
                message = 'Invalid email format.';
                break;
            case 'auth/missing-email':
                message = 'Please enter your email.';
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

