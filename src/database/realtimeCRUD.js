import database from '@react-native-firebase/database';

// ✅ CREATE
export const addUser = async (userData) => {
    try {
        const newRef = database().ref('/users').push();
        await newRef.set(userData);
        return { success: true, message: 'User added successfully.' };
    } catch (error) {
        let message = '';
        switch (error.code) {
            case 'permission-denied':
                message = 'You do not have permission to add data.';
                break;
            case 'network-error':
                message = 'Network issue. Please check your connection.';
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
        const snapshot = await database().ref('/users').once('value');
        if (snapshot.exists()) {
            const data = snapshot.val();
            const users = Object.entries(data).map(([id, user]) => ({
                id,
                ...user,
            }));
            return { success: true, data: users };
        } else {
            return { success: true, data: [] };
        }
    } catch (error) {
        let message = '';
        switch (error.code) {
            case 'permission-denied':
                message = 'You do not have permission to read data.';
                break;
            case 'network-error':
                message = 'Network issue. Please check your connection.';
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
        await database().ref(`/users/${id}`).update(updateData);
        return { success: true, message: 'User updated successfully.' };
    } catch (error) {
        let message = '';
        switch (error.code) {
            case 'permission-denied':
                message = 'You do not have permission to update this user.';
                break;
            case 'network-error':
                message = 'Network issue. Please check your connection.';
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
        await database().ref(`/users/${id}`).remove();
        return { success: true, message: 'User deleted successfully.' };
    } catch (error) {
        let message = '';
        switch (error.code) {
            case 'permission-denied':
                message = 'You do not have permission to delete this user.';
                break;
            case 'network-error':
                message = 'Network issue. Please check your connection.';
                break;
            default:
                message = error.message || 'Something went wrong while deleting user.';
                break;
        }
        return { success: false, message };
    }
};