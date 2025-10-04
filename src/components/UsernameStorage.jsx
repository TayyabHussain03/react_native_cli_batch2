import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UsernameStorage = () => {
  const [username, setUsername] = useState('');
  const [storedUsername, setStoredUsername] = useState('');

  // ✅ Get username on component mount
  useEffect(() => {
    getUsername();
  }, []);

  // ✅ Save username to AsyncStorage
  const saveUsername = async () => {
    try {
      await AsyncStorage.setItem('username', username);
      Alert.alert('Success', 'Username saved successfully');
      setUsername('');
      getUsername(); // Refresh stored value
    } catch (error) {
      Alert.alert('Error', 'Failed to save username');
    }
  };

  // ✅ Retrieve username from AsyncStorage
  const getUsername = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value) {
        setStoredUsername(value);
      } else {
        setStoredUsername('');
        Alert.alert('Info', 'No username found');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to retrieve username');
    }
  };

  // ✅ Remove username from AsyncStorage
  const removeUsername = async () => {
    try {
      await AsyncStorage.removeItem('username');
      Alert.alert('Removed', 'Username deleted');
      setStoredUsername('');
    } catch (error) {
      Alert.alert('Error', 'Failed to remove username');
    }
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#f5f6fa',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
    }}>
      <Text style={{
        fontSize: 26,
        fontWeight: 'bold',
        color: '#2f3640',
        marginBottom: 20
      }}>
        AsyncStorage Example
      </Text>

      <TextInput
        style={{
          width: '90%',
          backgroundColor: '#dcdde1',
          padding: 12,
          borderRadius: 10,
          fontSize: 16,
          marginBottom: 20,
          color: '#2f3640'
        }}
        placeholder="Enter Username"
        placeholderTextColor="#636e72"
        value={username}
        onChangeText={setUsername}
      />

      <TouchableOpacity
        onPress={saveUsername}
        style={{
          backgroundColor: '#00a8ff',
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 10,
          marginBottom: 10
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>Save Username</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={getUsername}
        style={{
          backgroundColor: '#10ac84',
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 10,
          marginBottom: 10
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>Get Username</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={removeUsername}
        style={{
          backgroundColor: '#e84118',
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 10
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>Remove Username</Text>
      </TouchableOpacity>

      {storedUsername ? (
        <Text style={{
          marginTop: 30,
          fontSize: 18,
          color: '#2f3640'
        }}>
          Stored Username: <Text style={{ fontWeight: 'bold', color: '#00cec9' }}>{storedUsername}</Text>
        </Text>
      ) : null}
    </View>
  );
};

export default UsernameStorage;