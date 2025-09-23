import React from 'react';
import { View, Text, Pressable, Alert, StyleSheet } from 'react-native';

const Presable = () => {
//   const handlePress = () => {
//     Alert.alert('Pressed', 'You tapped the Pressable button');
//   };

  const handlePressIn = () => {
    console.log('Press In: Finger touched the button');
  };

  const handlePressOut = () => {
    console.log('Press Out: Finger lifted off the button');
  };

  const handleLongPress = () => {
    Alert.alert('Long Pressed', 'You held the button long enough');
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed // ✅ Visual feedback on press
        ]}
        // onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onLongPress={handleLongPress}
        delayLongPress={500} // ✅ Default is 500ms — you can customize it
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </Pressable>
    </View>
  );
};

export default Presable;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center', // ✅ Center vertically
      alignItems: 'center',     // ✅ Center horizontally
      backgroundColor: '#f2f2f2'
    },
    button: {
      backgroundColor: '#3498db',
      paddingVertical: 14,
      paddingHorizontal: 24,
      borderRadius: 8
    },
    buttonPressed: {
      backgroundColor: '#2980b9' // ✅ Darker shade on press
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold'
    }
  });