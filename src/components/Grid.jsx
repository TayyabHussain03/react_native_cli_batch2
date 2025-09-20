import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const data = [
    { id: '1', title: 'Profile Settings' },
    { id: '2', title: 'Messages' },
    { id: '3', title: 'Notifications' },
    { id: '4', title: 'Saved Items' },
    { id: '5', title: 'Help & Support' },
    { id: '6', title: 'Logout' },
    { id: '7', title: 'Privacy Policy' },
    { id: '8', title: 'Terms & Conditions' },
    { id: '9', title: 'Invite Friends' },
    { id: '10', title: 'App Feedback' },
    { id: '11', title: 'Language Settings' },
    { id: '12', title: 'Dark Mode' },
    { id: '13', title: 'Account Security' },
    { id: '14', title: 'About Us' }

];

const Grid = () => {
    return (

        // jb scrollview ko style dena hota h tau contentContainerStyle use krte hain
        <ScrollView contentContainerStyle={styles.container}>
            {data.map((item) => (
                <View key={item.id} style={styles.gridItem}>
                    <Text style={styles.itemText}>{item.title}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

export default Grid;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 16
    },
    gridItem: {
        width: '48%', // Two items per row
        height: 100,
        backgroundColor: '#bf4150',
        padding: 20,
        marginBottom: 16,
        borderRadius: 8,
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        
        elevation: 10,
    },
    itemText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});