import React, { useState, createContext } from 'react';
import { View, StyleSheet } from 'react-native';
import FirstChild from './FirstChild';

export const CounterContext = createContext();

const Parent = () => {
  const [counter, setCounter] = useState(0);

  const incrementCount = () => {
    setCounter(prev => prev + 1);
  };

  return (
    <CounterContext.Provider value={{ counter, incrementCount }}>
      <View style={styles.container}>
        <FirstChild />
      </View>
    </CounterContext.Provider>
  );
};

export default Parent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f6fa'
  }
});