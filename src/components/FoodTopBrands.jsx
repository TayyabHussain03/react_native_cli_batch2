import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');

const brands = [
    { name: 'KFC', logo: require('../assets/kfc.png') },
    { name: 'McDonald\'s', logo: require('../assets/mcdonald.png') },
];

const FoodTopBrands = () => (
    <View style={styles.wrapper}>
        <Text style={styles.heading}>Top Brands</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {brands.map((item, index) => (
                <View key={index} style={styles.card}>
                    <Image source={item.logo} style={styles.logo} />
                    <Text style={styles.name}>{item.name}</Text>
                </View>
            ))}
        </ScrollView>
    </View>
);

export default FoodTopBrands;

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        marginBottom: 30,
    },
    heading: {
        fontSize: 16,
        fontFamily: 'Kreon-Bold',
        color: '#024220',
        marginBottom: 10,
    },
    card: {
        width: width * 0.3,
        marginRight: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 10,
        alignItems: 'center',
        elevation: 2,
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginBottom: 6,
    },
    name: {
        fontSize: 12,
        fontFamily: 'Kreon-Regular',
        color: '#024220',
        textAlign: 'center',
    },
});