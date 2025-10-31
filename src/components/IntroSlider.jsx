import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Pressable } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const slides = [
    {
        key: 'slide1',
        title: 'Free Delivery Offers',
        description: 'Free delivery for new customers via credit card and other payment method',
        image: require('../assets/rider.png'),
    },
    {
        key: 'slide2',
        title: 'Secure Payments',
        description: 'Pay safely with credit card, debit card, or mobile wallet.',
        image: require('../assets/cook.png'),
    },
    {
        key: 'slide3',
        title: 'Track Orders',
        description: 'Real-time tracking keeps you updated every step of the way.',
        image: require('../assets/deliver.png'),
    },
];

const IntroSlider = () => {
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const navigation = useNavigation();


    const renderItem = ({ item }) => (
        <View style={styles.slide}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
            <Text style={styles.main}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );

    const renderPagination = (activeIndex) => (
        <View style={styles.footer}>
            <View style={styles.dotsContainer}>
                {slides.map((_, i) => (
                    <View
                        key={i}
                        style={i === activeIndex ? styles.activeDot : styles.dot}
                    />
                ))}
            </View>

            {activeIndex === slides.length - 1 ? (
                <Pressable
                    android_ripple={{ color: '#ffffff30' }}
                    style={({ pressed }) => [
                        styles.button,
                        pressed && { opacity: 0.7 },
                    ]}

                    onPress={() => {
                        navigation.navigate('Login')
                    }}
                >
                    <Text style={styles.buttonText}>GET STARTED</Text>
                </Pressable>
            ) : (
                <View style={styles.navButtonsContainer}>
                    <Pressable
                        onPress={() => sliderRef.current?.goToSlide(activeIndex + 1, true)}
                        style={({ pressed }) => [
                            styles.navButton,
                            pressed && styles.navButtonPressed,
                        ]}
                    >
                        <Text style={styles.navButtonText}>Next</Text>
                    </Pressable>

                    <Pressable
                        onPress={() => {
                            navigation.navigate('Login')
                        }}
                        style={({ pressed }) => [
                            styles.navButton,
                            pressed && styles.navButtonPressed,
                        ]}
                    >
                        <Text style={styles.navButtonText}>Skip</Text>
                    </Pressable>
                </View>
            )}
        </View>
    );



    return (
        <AppIntroSlider
            ref={sliderRef}
            data={slides}
            renderItem={renderItem}
            showNextButton={false}
            showDoneButton={false}
            renderPagination={renderPagination}
            onSlideChange={(index) => setActiveIndex(index)}
        />
    );
};

export default IntroSlider;

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        backgroundColor: '#FFFFFF',
    },
    image: {
        width: width * 0.8,
        height: height * 0.4,
    },
    main: {
        fontFamily: 'Kreon-Bold',
        fontSize: 30,
        color: '#024220',
        textAlign: 'center',
    },
    description: {
        fontSize: 20,
        color: '#475569',
        textAlign: 'center',
        paddingHorizontal: 20,
        fontWeight: '300',
        fontFamily: 'Kreon-Light'
    },
    dot: {
        backgroundColor: '#cbd5e1',
        width: 19,
        height: 9,
        borderRadius: 20,
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#024220',
        width: 19,
        height: 9,
        borderRadius: 20,
        marginHorizontal: 4,
    },
    footer: {
        position: 'absolute',
        bottom: 40,
        width: '100%',
        alignItems: 'center',
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#024220',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 1,
        fontFamily: 'Kreon-Bold'
    },

    navButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },

    navButton: {
        borderWidth: 1,
        borderColor: '#024220',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
    },

    navButtonPressed: {
        opacity: 0.6,
    },

    navButtonText: {
        color: '#024220',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 1,
        fontFamily: 'Kreon-Bold',
    },
});
