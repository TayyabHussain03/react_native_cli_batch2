import React from 'react';
import { View, Text, Button, TouchableOpacity, TouchableHighlight, StyleSheet, Alert } from 'react-native';

const StylingButton = () => {
  const handlePress = (type) => {
    Alert.alert('Pressed', `You pressed the ${type} button`);
  };

  return (
    <View style={styles.container}>
      {/* ✅ 1. Button Component */}
      {/* ❗️ Note: Button does NOT accept style prop directly. You must wrap it in a styled View. */}
      <View style={styles.buttonWrapper}>
        <Button title="Native Button" onPress={() => handlePress('Button')} color="#3498db" />
      </View>

      {/* ✅ 2. TouchableOpacity */}
      {/* ✅ TouchableOpacity allows custom styling and fades out when pressed using activeOpacity */}
      {/* ✅ activeOpacity controls how much the button fades when pressed (0.2 = more fade, 1 = no fade) */}
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => handlePress('TouchableOpacity')}
        activeOpacity={0.6} // ✅ Controls press feedback
      >
        <Text style={styles.touchableText}>Touchable Opacity</Text>
      </TouchableOpacity>

      {/* ✅ 3. TouchableHighlight */}
      {/* ✅ TouchableHighlight darkens the background when pressed to give visual feedback */}
      {/* ✅ underlayColor defines the color shown when pressed */}
      <TouchableHighlight
        style={styles.touchableHighlight}
        onPress={() => handlePress('TouchableHighlight')}
        underlayColor="#2c3e50" // ✅ Darkens on press
      >
        <Text style={styles.touchableText}>Touchable Highlight</Text>
      </TouchableHighlight>
    </View>
  );
};

export default StylingButton;

const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#ecf0f1',
      flex: 1,
      justifyContent: 'center'
    },
    buttonWrapper: {
      marginBottom: 20,
      borderRadius: 8,
      overflow: 'hidden' // ✅ Required to apply rounded corners to Button wrapper
    },
    touchableOpacity: {
      backgroundColor: '#e67e22',
      padding: 15,
      borderRadius: 8,
      marginBottom: 20
    },
    touchableHighlight: {
      backgroundColor: '#1abc9c',
      padding: 15,
      borderRadius: 8
    },
    touchableText: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold'
    }
  });