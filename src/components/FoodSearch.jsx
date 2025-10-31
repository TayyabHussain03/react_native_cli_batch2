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
        backgroundColor: '#D6FFD9',
        borderRadius: 20,
        paddingHorizontal: width * 0.04,
        paddingVertical: 10,
        marginHorizontal: width * 0.05,
        marginTop: 12,
        elevation: 2,
    },

    searchIcon: {
        marginRight: 8,
    },

    searchInput: {
        flex: 1,
        fontSize: 14,
        color: '#024220',
        fontFamily: 'Kreon-Regular',
    },
});
