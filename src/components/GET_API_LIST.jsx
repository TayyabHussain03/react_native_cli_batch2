import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const GET_API_LIST = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            const response = await axios.get('http://192.168.0.110:3000/users');
            setUsers(response.data);
        } catch (error) {
            console.error('GET Error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>User List</Text>

            {loading ? (
                <ActivityIndicator size="large" color="#00a8ff" />
            ) : (
                <FlatList
                    data={users}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={styles.list}
                />
            )}
        </View>
    );
};

export default GET_API_LIST;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6fa',
        paddingTop: 50,
        paddingHorizontal: 20
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2f3640',
        marginBottom: 20,
        textAlign: 'center'
    },
    list: {
        paddingBottom: 20
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2d3436',
        marginBottom: 4
    },
    email: {
        fontSize: 15,
        color: '#636e72'
    }
});