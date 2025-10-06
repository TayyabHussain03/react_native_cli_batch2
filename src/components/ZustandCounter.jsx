import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useCounter } from '../zustand/store'; // ✅ Make sure path is correct

const ZustandCounter = () => {
    // ✅ Accessing state and actions from Zustand store
    const { counter, increment, decrement } = useCounter();

    return (
        <View style={styles.container}>
            {/* ✅ Title */}
            <Text style={styles.title}>Zustand Counter</Text>

            {/* ✅ Displaying current counter value */}
            <Text style={styles.counterText}>Count: {counter}</Text>

            {/* ✅ Increment Button */}
            <TouchableOpacity style={styles.buttonBlue} onPress={increment}>
                <Text style={styles.buttonText}>Increment</Text>
            </TouchableOpacity>

            {/* ✅ Decrement Button */}
            <TouchableOpacity style={styles.buttonRed} onPress={decrement}>
                <Text style={styles.buttonText}>Decrement</Text>
            </TouchableOpacity>

            {/* ✅ Reset Button */}
            <TouchableOpacity
                style={styles.buttonGray}
                onPress={() => useCounter.setState({ counter: 0 })}
            >
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ZustandCounter;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6fa',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#2f3640',
        marginBottom: 20
    },
    counterText: {
        fontSize: 22,
        fontWeight: '600',
        color: '#00cec9',
        marginBottom: 30
    },
    buttonBlue: {
        backgroundColor: '#00a8ff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
        marginBottom: 10
    },
    buttonRed: {
        backgroundColor: '#e84118',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
        marginBottom: 10
    },
    buttonGray: {
        backgroundColor: '#636e72',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    }
});