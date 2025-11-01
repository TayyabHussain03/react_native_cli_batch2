import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const FoodHeader = () => (
    <View style={styles.headerBar}>
        <TouchableOpacity style={styles.locationWrapper} onPress={() => console.log('Address clicked')}>
            <Icon name="map-marker-outline" size={24} color="#ffffff" style={styles.locationIcon} />
            <View>
                <Text style={styles.homeText}>Home</Text>
                <Text style={styles.addressText}>G-21 Shakeel Corporation</Text>
            </View>
        </TouchableOpacity>

        <View style={styles.iconRow}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => console.log('Heart clicked')}>
                <Icon name="heart-outline" size={24} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} onPress={() => console.log('Bag clicked')}>
                <Icon name="shopping-outline" size={24} color="#ffffff" />
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
        paddingHorizontal: width * 0.04,
        paddingVertical: 15,
    },

    locationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },

    locationIcon: {
        marginRight: 4,
    },

    homeText: {
        fontSize: 14,
        color: '#ffffff',
        fontFamily: 'Kreon-Bold',
    },

    addressText: {
        fontSize: 12,
        color: '#ffffff',
        fontFamily: 'Kreon-Light',
    },

    iconRow: {
        flexDirection: 'row',
        gap: 16,
    },
});