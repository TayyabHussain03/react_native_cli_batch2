import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/slice/CounterSlice'; // ✅ Importing actions

const Counter = () => {
    // ✅ Accessing counter value from Redux store
    const count = useSelector((state) => state.counter.value);

    // ✅ Getting dispatch function to trigger actions
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            {/* ✅ Displaying counter value */}
            <Text style={styles.title}>Redux Counter</Text>
            <Text style={styles.countText}>Count: {count}</Text>

            {/* ✅ Increment button */}
            <View style={styles.buttonWrapper}>
                <Button title="Increment" onPress={() => dispatch(increment())} color="#00a8ff" />
            </View>

            {/* ✅ Decrement button */}
            <View style={styles.buttonWrapper}>
                <Button title="Decrement" onPress={() => dispatch(decrement())} color="#e84118" />
            </View>
        </View>
    );
};

export default Counter;

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
    countText: {
        fontSize: 22,
        fontWeight: '600',
        color: '#00cec9',
        marginBottom: 30
    },
    buttonWrapper: {
        width: '60%',
        marginBottom: 15,
        borderRadius: 10,
        overflow: 'hidden'
    }
});