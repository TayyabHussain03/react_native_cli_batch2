import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const banners = [
    {
        text: 'Welcome back! Enjoy Rs. 250 off & free delivery',
        image: require('../assets/burger.png'),
    },
    {
        text: 'Get 20% off on your first order!',
        image: require('../assets/cook.png'),
    },
];

const FoodBanner = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % banners.length);
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    return (
        <View style={styles.promoBanner}>
            <View style={styles.textContainer}>
                <Text style={styles.promoMessage}>{banners[index].text}</Text>
                <TouchableOpacity
                    style={styles.redeemButton}
                    activeOpacity={0.7}
                    onPress={() => console.log('Redeem')}
                >
                    <Text style={styles.redeemText}>Redeem Now</Text>
                </TouchableOpacity>
            </View>
            <Image source={banners[index].image} style={styles.promoImage} resizeMode="contain" />
        </View>
    );
};

export default FoodBanner;

const styles = StyleSheet.create({
    promoBanner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * 0.9, // match search bar width
        alignSelf: 'center',
        backgroundColor: 'transparent',
        marginTop:5 ,
        paddingVertical: 15,
    },

    textContainer: {
        flex: 1,
        paddingRight: 10,
    },

    promoMessage: {
        fontSize: 18,
        color: '#ffffff',
        fontFamily: 'Kreon-Bold',
        marginBottom: 8,
    },

    redeemButton: {
        backgroundColor: '#ffffff',
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 8,
        alignSelf: 'flex-start',
    },

    redeemText: {
        color: '#024220',
        fontSize: 14,
        fontFamily: 'Kreon-Regular',
    },

    promoImage: {
        width: width * 0.38,
        height: width * 0.38,
    },
});