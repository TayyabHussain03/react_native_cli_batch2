import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');

    // ✅ Sample contact array with id and name
    const contacts = [
        { id: '1', name: 'Bilal' },
        { id: '2', name: 'Niazi' },
        { id: '3', name: 'Chauhan' },
        { id: '4', name: 'Tayyab' },
        { id: '5', name: 'Zain' },
        { id: '6', name: 'Areeba' },
        { id: '7', name: 'Hamza' },
        { id: '8', name: 'Mehwish' }
    ];

    // ✅ Method 1: Using filter() with includes() — case-insensitive search
    // const filteredContacts = contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    // ✅ Method 2: Using startsWith() — faster for prefix match
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>🔍 Contact Search</Text>

            <TextInput
                style={styles.searchBar}
                placeholder="Search contacts..."
                placeholderTextColor="#aaa"
                value={searchQuery}
                onChangeText={setSearchQuery}
            />

            <FlatList
                data={filteredContacts}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f2027', // ✅ Dark techy gradient base
        paddingTop: 60,
        paddingHorizontal: 20
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#00b894',
        marginBottom: 20,
        textAlign: 'center'
    },
    searchBar: {
        backgroundColor: '#2d3436',
        color: '#dfe6e9',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#636e72'
    },
    list: {
        paddingBottom: 20
    },
    card: {
        backgroundColor: '#1e272e',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        color: '#00cec9'
    }
});