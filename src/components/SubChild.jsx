import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CounterContext } from './Parent';

const SubChild = () => {
    const { counter, incrementCount } = useContext(CounterContext);

    return (
        <View style={styles.box}>
            <Text style={styles.counterText}>Counter: {counter}</Text>
            <Button title="Increment Counter" onPress={incrementCount} />
        </View>
    );
};

export default SubChild;

const styles = StyleSheet.create({
    box: {
        padding: 20,
        backgroundColor: '#dcdde1',
        borderRadius: 10,
        alignItems: 'center'
    },
    counterText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#2f3640'
    }
});