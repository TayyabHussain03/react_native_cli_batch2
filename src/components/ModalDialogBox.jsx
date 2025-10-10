import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const ModalDialogBox = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* ✅ Button to show modal */}
      <TouchableOpacity style={styles.openButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Show Modal</Text>
      </TouchableOpacity>

      {/* ✅ Modal Component */}
      <Modal
        visible={modalVisible} // ✅ Controls modal visibility
        transparent={true}     // ✅ Allows background to be semi-transparent
        animationType="fade"  // ✅ Transition effect: 'slide', 'fade', or 'none'
        onRequestClose={() => {
          // ✅ Required for Android back button behavior
          setModalVisible(false);
        }}
      >
        {/* ✅ Modal content wrapper */}
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Modal Dialog</Text>
            <Text style={styles.modalMessage}>This is a beautifully styled modal box.</Text>

            {/* ✅ Close button inside modal */}
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalDialogBox;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ecf0f1'
    },
    openButton: {
      backgroundColor: '#6c5ce7',
      paddingVertical: 14,
      paddingHorizontal: 28,
      borderRadius: 10,
      elevation: 3
    },
    closeButton: {
      backgroundColor: '#d63031',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      marginTop: 20
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)', // ✅ Semi-transparent background
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalBox: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 24,
      width: '80%',
      elevation: 5
    },
    modalTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#2c3e50',
      textAlign: 'center'
    },
    modalMessage: {
      fontSize: 16,
      color: '#636e72',
      textAlign: 'center'
    }
  });