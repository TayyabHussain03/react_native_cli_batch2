import { getApp } from '@react-native-firebase/app';
import { getFirestore } from '@react-native-firebase/firestore';

const firestore = getFirestore(getApp());
const usersRef = firestore.collection('users');

// ✅ CREATE
export const addUser = async (userData) => {
    try {
        await usersRef.add(userData);
        return { success: true, message: 'User added successfully.' };
    } catch (error) {
        let message = '';
        switch (error.code) {
            case 'permission-denied':
                message = 'You do not have permission to add data.';
                break;
            default:
                message = error.message;
                break;
        }
        return { success: false, message };
    }
};

// ✅ READ
export const getUsers = async () => {
    try {
        const snapshot = await usersRef.get();
        const users = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        return { success: true, data: users };
    } catch (error) {
        let message = '';
        switch (error.code) {
            case 'unavailable':
                message = 'Firestore service is currently unavailable.';
                break;
            default:
                message = error.message;
                break;
        }
        return { success: false, message };
    }
};

// ✅ UPDATE
export const updateUser = async (id, updateData) => {
    try {
        await usersRef.doc(id).update(updateData);
        return { success: true, message: 'User updated successfully.' };
    } catch (error) {
        let message = '';
        switch (error.code) {
            case 'not-found':
                message = 'User not found.';
                break;
            case 'permission-denied':
                message = 'You do not have permission to update this user.';
                break;
            default:
                message = error.message;
                break;
        }
        return { success: false, message };
    }
};

// ✅ DELETE
export const deleteUser = async (id) => {
    try {
        await usersRef.doc(id).delete();
        return { success: true, message: 'User deleted successfully.' };
    } catch (error) {
        let message = '';
        switch (error.code) {
            case 'not-found':
                message = 'User not found.';
                break;
            case 'permission-denied':
                message = 'You do not have permission to delete this user.';
                break;
            default:
                message = error.message;
                break;
        }
        return { success: false, message };
    }
};