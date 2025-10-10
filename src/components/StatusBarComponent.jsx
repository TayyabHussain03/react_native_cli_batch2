import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

const StatusBarComponent = () => {
  return (
    <View style={styles.container}>
      {/* ✅ StatusBar setup */}
      <StatusBar
        backgroundColor="#1abc9c" // ✅ Status bar background color (Android only)
        barStyle="light-content"  // ✅ Text/icons color: 'light-content' or 'dark-content'
        translucent={true}        // ✅ Allows content to render under the status bar
        hidden={false}            // ✅ Allows status bar to hidden or shown by defalut false
      />

      {/* ✅ Content below status bar */}
      <Text style={styles.heading}>StatusBar Example</Text>
      <Text style={styles.description}>
        This screen uses a translucent status bar with custom styling.
      </Text>
    </View>
  );
};

export default StatusBarComponent;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      paddingTop: 40, // ✅ Required when translucent is true to avoid overlap
      paddingHorizontal: 20
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: 10
    },
    description: {
      fontSize: 16,
      color: '#34495e'
    }
  });