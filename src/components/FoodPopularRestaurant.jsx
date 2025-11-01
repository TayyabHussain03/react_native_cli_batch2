import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');

const restaurants = [
    { name: 'Burger Lab', image: require('../assets/burger.png') },
    { name: 'Pizza Max', image: require('../assets/deliver.png') },
];

const FoodPopularRestaurant = () => (
    <View style={styles.wrapper}>
        <Text style={styles.heading}>Popular Restaurants</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {restaurants.map((item, index) => (
                <View key={index} style={styles.card}>
                    <Image source={item.image} style={styles.image} />
                    <Text style={styles.name}>{item.name}</Text>
                </View>
            ))}
        </ScrollView>
    </View>
);

export default FoodPopularRestaurant;

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
    },
    heading: {
        fontSize: 16,
        fontFamily: 'Kreon-Bold',
        color: '#024220',
        marginBottom: 10,
    },
    card: {
        width: width * 0.5,
        marginRight: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 10,
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
        borderRadius: 8,
        marginBottom: 6,
    },
    name: {
        fontSize: 13,
        fontFamily: 'Kreon-Regular',
        color: '#024220',
    },
});