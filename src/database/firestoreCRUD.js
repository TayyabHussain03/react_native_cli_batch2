import { getApp } from '@react-native-firebase/app';
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from '@react-native-firebase/firestore';

const db = getFirestore(getApp());
const usersRef = collection(db, 'users');

// ✅ CREATE
export const addUser = async (userData) => {
    try {
        await addDoc(usersRef, userData);
        return { success: true, message: 'User added successfully.' };
    } catch (error) {
        let message = '';
        switch (error.code) {
            case 'permission-denied':
                message = 'You do not have permission to add data.';
                break;
            case 'invalid-argument':
                message = 'Invalid user data format.';
                break;
            default:
                message = error.message || 'Something went wrong while adding user.';
                break;
        }
        return { success: false, message };
    }
};

// ✅ READ
export const getUsers = async () => {
    try {
        const snapshot = await getDocs(usersRef);
        const users = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        return { success: true, data: users };
    } catch (error) {
        let message = '';
        switch (error.code) {
            case 'permission-denied':
                message = 'You do not have permission to read data.';
                break;
            default:
                message = error.message || 'Something went wrong while fetching users.';
                break;
        }
        return { success: false, message };
    }
};

// ✅ UPDATE
export const updateUser = async (id, updateData) => {
    try {
        const userDoc = doc(db, 'users', id);
        await updateDoc(userDoc, updateData);
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
                message = error.message || 'Something went wrong while updating user.';
                break;
        }
        return { success: false, message };
    }
};

// ✅ DELETE
export const deleteUser = async (id) => {
    try {
        const userDoc = doc(db, 'users', id);
        await deleteDoc(userDoc);
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
                message = error.message || 'Something went wrong while deleting user.';
                break;
        }
        return { success: false, message };
    }
};