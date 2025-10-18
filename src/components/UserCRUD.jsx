import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    FlatList,
    Alert,
    StyleSheet,
} from 'react-native';
import {
    addUser,
    getUsers,
    updateUser,
    deleteUser,
} from '../database/firestoreCRUD'

const UserCRUD = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [users, setUsers] = useState([]);
    const [editId, setEditId] = useState(null);

    // ✅ Fetch users on mount
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const result = await getUsers();
        if (result.success) {
            setUsers(result.data);
        } else {
            Alert.alert('Error', result.message);
        }
    };

    const handleSubmit = async () => {
        if (!name || !email || !phone) {
            Alert.alert('Error', 'Please fill all fields');
            return;
        }

        const userData = { name, email, phone };

        if (editId) {
            const result = await updateUser(editId, userData);
            if (result.success) {
                Alert.alert('Success', result.message);
                resetForm();
                fetchUsers();
            } else {
                Alert.alert('Error', result.message);
            }
        } else {
            const result = await addUser(userData);
            if (result.success) {
                Alert.alert('Success', result.message);
                resetForm();
                fetchUsers();
            } else {
                Alert.alert('Error', result.message);
            }
        }
    };

    const handleEdit = (user) => {
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone);
        setEditId(user.id);
    };

    const handleDelete = async (id) => {
        const result = await deleteUser(id);
        if (result.success) {
            Alert.alert('Success', result.message);
            fetchUsers();
        } else {
            Alert.alert('Error', result.message);
        }
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setPhone('');
        setEditId(null);
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>User Manager</Text>

                <TextInput
                    placeholder="Name"
                    placeholderTextColor="#6366f1"
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#6366f1"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    keyboardType="email-address"
                />
                <TextInput
                    placeholder="Phone"
                    placeholderTextColor="#6366f1"
                    value={phone}
                    onChangeText={setPhone}
                    style={styles.input}
                    keyboardType="phone-pad"
                />

                <Pressable onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>
                        {editId ? 'Update User' : 'Add User'}
                    </Text>
                </Pressable>
            </View>

            <FlatList
                data={users}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 100 }}
                renderItem={({ item }) => (
                    <View style={styles.userCard}>
                        <Text style={styles.userText}>{item.name}</Text>
                        <Text style={styles.userText}>{item.email}</Text>
                        <Text style={styles.userText}>{item.phone}</Text>

                        <View style={styles.actions}>
                            <Pressable onPress={() => handleEdit(item)} style={styles.editBtn}>
                                <Text style={styles.actionText}>Edit</Text>
                            </Pressable>
                            <Pressable onPress={() => handleDelete(item.id)} style={styles.deleteBtn}>
                                <Text style={styles.actionText}>Delete</Text>
                            </Pressable>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default UserCRUD;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e7ff',
        padding: 16,
    },
    card: {
        backgroundColor: 'rgba(255,255,255,0.85)',
        borderRadius: 24,
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
    },
    title: {
        fontSize: 26,
        fontWeight: '800',
        color: '#1e293b',
        textAlign: 'center',
        marginBottom: 16,
        letterSpacing: 1,
    },
    input: {
        backgroundColor: '#f8fafc',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
        marginBottom: 12,
        fontSize: 16,
        color: '#1e293b',
        borderWidth: 1,
        borderColor: '#cbd5e1',
    },
    button: {
        backgroundColor: '#6366f1',
        paddingVertical: 14,
        borderRadius: 999,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
    userCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    userText: {
        fontSize: 15,
        color: '#1e293b',
        marginBottom: 4,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    editBtn: {
        backgroundColor: '#4ade80',
        padding: 8,
        borderRadius: 8,
    },
    deleteBtn: {
        backgroundColor: '#f87171',
        padding: 8,
        borderRadius: 8,
    },
    actionText: {
        color: '#fff',
        fontWeight: '600',
    },
});