import React, { useState, useRef } from 'react';
import {
    StyleSheet,
    Dimensions,
    RefreshControl,
    View,
    Animated,
} from 'react-native';
import FoodHeader from '../../components/FoodHeader';
import FoodSearch from '../../components/FoodSearch';
import FoodBanner from '../../components/FoodBanner';
import FoodContainer from '../FoodContainer/FoodContainer';

const { width } = Dimensions.get('window');
const HEADER_HEIGHT = 60;
const SEARCH_HEIGHT = 20;

const FoodScreen = () => {
    const [refreshing, setRefreshing] = useState(false);
    const scrollY = useRef(new Animated.Value(0)).current;

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 1500);
    };

    return (
        <View style={styles.wrapper}>
            {/* Header animation */}
            <Animated.View
                style={[
                    styles.animatedHeader,
                    {
                        opacity: scrollY.interpolate({
                            inputRange: [0, 300],
                            outputRange: [1, 0],
                            extrapolate: 'clamp',
                        }),
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [0, 300],
                                    outputRange: [0, -HEADER_HEIGHT],
                                    extrapolate: 'clamp',
                                }),
                            },
                        ],
                    },
                ]}
            >
                <FoodHeader />
            </Animated.View>

            {/* Search animation */}
            <Animated.View
                style={[
                    styles.animatedSearch,
                    {
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [0, 300],
                                    outputRange: [HEADER_HEIGHT, 0],
                                    extrapolate: 'clamp',
                                }),
                            },
                        ],
                    },
                ]}
            >
                <FoodSearch />
                <View style={{ height: 10, backgroundColor: '#024220' }} />
            </Animated.View>

            {/* Scrollable content wrapper with translateY */}
            <Animated.View
                style={{
                    flex: 1,
                    transform: [
                        {
                            translateY: scrollY.interpolate({
                                inputRange: [0, 300],
                                outputRange: [HEADER_HEIGHT + SEARCH_HEIGHT + 10, SEARCH_HEIGHT + 10],
                                extrapolate: 'clamp',
                            }),
                        },
                    ],
                }}
            >
                <Animated.ScrollView
                    style={styles.scrollArea}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            progressViewOffset={50}
                        />
                    }
                    showsVerticalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true }
                    )}
                    scrollEventThrottle={16}
                >
                    {/* Banner fades out on scroll */}
                    <Animated.View
                        style={{
                            opacity: scrollY.interpolate({
                                inputRange: [0, 150],
                                outputRange: [1, 0],
                                extrapolate: 'clamp',
                            }),
                            transform: [
                                {
                                    translateY: scrollY.interpolate({
                                        inputRange: [0, 150],
                                        outputRange: [0, -50],
                                        extrapolate: 'clamp',
                                    }),
                                },
                            ],
                        }}
                    >
                        <View style={styles.bannerSpacing}>
                            <FoodBanner />
                        </View>
                    </Animated.View>

                    {/* Small spacing before container */}
                    <View style={{ height: 5 }} />

                    {/* Main white content */}
                    <View style={styles.containerOuter}>
                        <View style={styles.containerInner}>
                            <FoodContainer />
                        </View>
                    </View>
                </Animated.ScrollView>
            </Animated.View>
        </View>
    );
};

export default FoodScreen;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#024220',
    },

    animatedHeader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        backgroundColor: '#024220',
    },

    animatedSearch: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9,
        paddingHorizontal: width * 0.05,
        backgroundColor: '#024220',
    },

    scrollArea: {
        flexGrow: 1,
    },

    bannerSpacing: {
        paddingHorizontal: width * 0.05,
        marginTop: 20,
    },

    containerOuter: {
        backgroundColor: '#024220',
    },

    containerInner: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingBottom: 40,
        paddingHorizontal: width * 0.05,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        overflow: 'hidden',
    },
});