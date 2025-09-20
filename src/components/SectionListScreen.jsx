import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

// ✅ SectionList expects array of sections with `title` and `data` keys
const sections = [
    {
        title: 'Fruits 🍎',
        data: ['Apple', 'Mango', 'Orange', 'Banana', 'Pineapple', 'Grapes']
    },
    {
        title: 'Vegetables 🥕',
        data: ['Carrot', 'Potato', 'Tomato', 'Spinach', 'Broccoli', 'Cabbage']
    },
    {
        title: 'Dairy 🧀',
        data: ['Milk', 'Cheese', 'Butter', 'Yogurt']
    },
    {
        title: 'Beverages 🥤',
        data: ['Water', 'Juice', 'Tea', 'Coffee', 'Soda']
    }
];


// ✅ External function to render each item
const renderItem = ({ item }) => (
    <View style={styles.itemBox}>
        <Text style={styles.itemText}>{item}</Text>
    </View>
);

// ✅ External function to render section headers
const renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
);


const SectionListScreen = () => {
    return (
        <View style={styles.container}>
            <SectionList
                // ✅ Required: array of sections
                sections={sections}

                // ✅ Required: function to render each item
                renderItem={renderItem}

                // ✅ Required: function to render section headers
                renderSectionHeader={renderSectionHeader}

                // ✅ Required: unique key for each item
                keyExtractor={(item, index) => item + index}

                // ❌ Optional: adds spacing/padding to inner content
                contentContainerStyle={styles.listContainer}

                // ❌ Optional: hides vertical scroll indicator
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default SectionListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingTop: 20
    },
    listContainer: {
        paddingBottom: 20
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#6abab3',
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginTop: 16
    },
    itemBox: {
        backgroundColor: '#ffffff',
        padding: 14,
        marginVertical: 6,
        marginHorizontal: 16,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2
    },
    itemText: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        fontWeight: '500'
    }
});
