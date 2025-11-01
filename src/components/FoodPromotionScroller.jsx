import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');

const promotions = [
    { text: 'Free delivery on orders above Rs. 500', image: require('../assets/rider.png') },
    { text: 'Buy 1 Get 1 Free on Burgers', image: require('../assets/burger.png') },
];

const FoodPromotionsScroller = () => (
    <View style={styles.wrapper}>
        <Text style={styles.heading}>Promotions</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {promotions.map((item, index) => (
                <View key={index} style={styles.card}>
                    <Image source={item.image} style={styles.image} />
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            ))}
        </ScrollView>
    </View>
);

export default FoodPromotionsScroller;

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
        width: width * 0.6,
        marginRight: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 10,
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
        borderRadius: 8,
        marginBottom: 6,
    },
    text: {
        fontSize: 12,
        fontFamily: 'Kreon-Regular',
        color: '#024220',
    },
});