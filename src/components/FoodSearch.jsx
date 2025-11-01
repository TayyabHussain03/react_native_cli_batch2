import React from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const FoodSearch = () => (
    <TouchableOpacity activeOpacity={0.8} style={styles.searchBar} onPress={() => console.log('Search tapped')}>
        <Icon name="magnify" size={22} color="black" style={styles.searchIcon} />
        <TextInput
            placeholder="Search for restaurants and groceries"
            placeholderTextColor="rgba(0, 0, 0, 0.4)"
            style={styles.searchInput}
            autoCapitalize="none"
            returnKeyType="search"
        />
    </TouchableOpacity>
);

export default FoodSearch;

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 30,
        paddingHorizontal: width * 0.05,
        width: width * 0.9, // occupies 90% of screen width
        alignSelf: 'center', // centers horizontally
        marginTop: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
    },

    searchIcon: {
        marginRight: 10,
    },

    searchInput: {
        flex: 1,
        fontSize: 15,
        color: '#024220',
        fontFamily: 'Kreon-Regular',
    },
});