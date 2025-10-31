import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const FoodHeader = () => (
    <View style={styles.headerBar}>
        <TouchableOpacity style={styles.locationWrapper} onPress={() => console.log('Address clicked')}>
            <Icon name="map-marker-outline" size={22} color="#024220" style={styles.locationIcon} />
            <View>
                <Text style={styles.homeText}>Home</Text>
                <Text style={styles.addressText}>G-21 Shakeel Corporation</Text>
            </View>
        </TouchableOpacity>

        <View style={styles.iconRow}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => console.log('Heart clicked')}>
                <Icon name="heart-outline" size={24} color="#024220" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} onPress={() => console.log('Bag clicked')}>
                <Icon name="shopping-outline" size={24} color="#024220" />
            </TouchableOpacity>
        </View>
    </View>
);

export default FoodHeader;

const styles = StyleSheet.create({
    headerBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: width * 0.05,
        paddingVertical: 12,
        backgroundColor: '#FFFFFF',
    },

    locationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    locationIcon: {
        marginRight: 4,
    },

    homeText: {
        fontSize: 14,
        color: '#024220',
        fontFamily: 'Kreon-Bold',
    },

    addressText: {
        fontSize: 12,
        color: '#024220',
        fontFamily: 'Kreon-Light',
    },

    iconRow: {
        flexDirection: 'row',
        gap: 16,
    },
});