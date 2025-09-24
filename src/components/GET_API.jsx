import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

const GET_API = () => {
    const [usersFetch, setUsersFetch] = useState([]);
    const [usersAxios, setUsersAxios] = useState([]);

    // localhost ki jagah pc ka ip address ayega aur pc aur mobile same network pr connect hone chahiye

    // ✅ Fetch method    
    useEffect(() => {
        fetch('http://192.168.0.110:3000/users')
            .then(res => res.json())
            .then(data => setUsersFetch(data))
            .catch(err => console.error("Fetch Error:", err));
    }, []);

    // ✅ Axios method
    useEffect(() => {
        axios
        axios.get('http://192.168.0.110:3000/users')
            .then(res => setUsersAxios(res.data))
            .catch(err => console.error("Axios Error:", err));
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>Users via Fetch</Text>
            {usersFetch.map((user) => (
                <Text key={user.id} style={styles.userText}>
                    {user.name}
                </Text>
            ))}

            <Text style={styles.heading}>Users via Axios</Text>
            {usersAxios.map((user) => (
                <Text key={user.id} style={styles.userText}>
                    {user.name}
                </Text>
            ))}
        </ScrollView>
    );
};

export default GET_API;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f5f6fa'
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#2f3640'
    },
    userText: {
        fontSize: 16,
        marginBottom: 6,
        color: '#353b48'
    }
});