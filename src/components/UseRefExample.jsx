import React, { useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const UseRefExample = () => {
  // ✅ useRef hook creates a mutable reference object
  const inputRef = useRef(null);

  const handleFocus = () => {
    // ✅ Accessing the current value of the ref to focus the input
    inputRef.current?.focus();
    inputRef.current?.setNativeProps({
        text:"tayyab",
    })
  };

  const handleStyleChange = () => {
    // ✅ Directly modifying native element style (works in web, limited in React Native)
    inputRef.current?.setNativeProps({
      style: { backgroundColor: '#ffeaa7', color: '#2d3436' }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>useRef Example</Text>

      {/* ✅ Ref attached to TextInput */}
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Type something..."
        placeholderTextColor="#aaa"
      />

      {/* ✅ Button to focus input */}
      <TouchableOpacity style={styles.button} onPress={handleFocus}>
        <Text style={styles.buttonText}>Focus Input</Text>
      </TouchableOpacity>

      {/* ✅ Button to change input style */}
      <TouchableOpacity style={[styles.button, styles.secondary]} onPress={handleStyleChange}>
        <Text style={styles.buttonText}>Change Style</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UseRefExample;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ecf0f1',
      padding: 20
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#2c3e50'
    },
    input: {
      width: '80%',
      borderWidth: 1,
      borderColor: '#b2bec3',
      borderRadius: 8,
      padding: 12,
      marginBottom: 20,
      fontSize: 16,
      color: '#2d3436'
    },
    button: {
      backgroundColor: '#0984e3',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      marginBottom: 12
    },
    secondary: {
      backgroundColor: '#6c5ce7'
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold'
    }
  });