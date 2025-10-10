import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';

const ImageComponent = () => {
    const localImage = require('../assets/image.jpg'); // ✅ Local image import
    const backgroundImage = { uri: 'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80' }; // ✅ Remote background image

    return (
        <ImageBackground
            source={backgroundImage}
            style={styles.fullBackground}
            resizeMode="cover"
            imageStyle={{ opacity: 0.7 }} // ✅ Slight fade for background
        >
            <View style={styles.container}>
                {/* ✅ Local Image with funky styling */}
                <Text style={styles.label}>🌟 Local Image</Text>
                <Image
                    source={localImage}
                    style={styles.image}
                    resizeMode="cover"
                />

                {/* ✅ Remote Image inside ImageBackground */}
                <Text style={styles.label}>🌐 Remote ImageBackground</Text>
                <ImageBackground
                    source={{ uri: 'https://picsum.photos/400/300' }}
                    style={styles.background}
                    imageStyle={styles.bgImage}
                >
                    <View style={styles.overlay}>
                        <Text style={styles.overlayText}>Funky Overlay Text 😎</Text>
                    </View>
                </ImageBackground>
            </View>
        </ImageBackground>
    );
};

export default ImageComponent;

const styles = StyleSheet.create({
    fullBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.7)', // ✅ Semi-transparent white box
        borderRadius: 20,
        marginHorizontal: 20
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2f3640',
        marginBottom: 10
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 15,
        marginBottom: 30,
        borderWidth: 2,
        borderColor: '#00cec9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5
    },
    background: {
        width: 300,
        height: 200,
        justifyContent: 'flex-end',
        borderRadius: 15,
        overflow: 'hidden'
    },
    bgImage: {
        borderRadius: 15
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10
    },
    overlayText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center'
    }
});