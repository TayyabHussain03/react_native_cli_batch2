import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import FoodPromotionsScroller from '../../components/FoodPromotionScroller';
import FoodPopularRestaurant from '../../components/FoodPopularRestaurant';
import FoodDealsScroller from '../../components/FoodDealsScroller';
import FoodTopBrands from '../../components/FoodTopBrands';

const { width } = Dimensions.get('window');

const FoodContainer = () => {
    return (
        <View style={styles.container}>
            <FoodPromotionsScroller />
            <FoodPopularRestaurant />
            <FoodDealsScroller />
            <FoodTopBrands />
        </View>
    );
};

export default FoodContainer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
        paddingBottom: 40,
        paddingHorizontal: width * 0.05,
    },
});
