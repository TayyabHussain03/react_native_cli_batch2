import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');

const deals = [
    { title: 'Rs. 100 Off', image: require('../assets/rider.png') },
    { title: 'Combo Meal Deal', image: require('../assets/deliver.png') },
];

const FoodDealsScroller = () => (
    <View style={styles.wrapper}>
        <Text style={styles.heading}>Deals</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {deals.map((item, index) => (
                <View key={index} style={styles.card}>
                    <Image source={item.image} style={styles.image} />
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            ))}
        </ScrollView>
    </View>
);

export default FoodDealsScroller;

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
        height: 100,
        resizeMode: 'cover',
        borderRadius: 8,
        marginBottom: 6,
    },
    title: {
        fontSize: 13,
        fontFamily: 'Kreon-Regular',
        color: '#024220',
    },
});