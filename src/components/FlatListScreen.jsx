import React from 'react';
import { View, Text, FlatList } from 'react-native';

// Sample data: FlatList hamesha array ya array of objects par kaam karta hai
const data = Array.from({ length: 15 }, (_, i) => ({
    id: String(i + 1),       // Unique key for each item (required for FlatList)
    title: `Item ${i + 1}`   // Display title
}));

const FlatListScreen = () => {

    // renderItem: FlatList ka required prop hai
    // Iska naam renderItem hi hona chahiye, lekin tum chaaho to kisi bhi naam ka function bana sakte ho
    // Bas us function ko renderItem prop mein pass karna hoga
    const renderItem = ({ item }) => (
        <View style={{
            backgroundColor: '#ffffff',
            padding: 16,
            marginVertical: 8,
            marginHorizontal: 16,
            borderRadius: 12,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3
        }}>
            <Text style={{
                fontSize: 16,
                fontWeight: '600',
                color: '#333',
                textAlign: 'center'
            }}>
                {item.title}
            </Text>
        </View>
    );

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#f2f2f2',
            paddingTop: 20
        }}>
            <FlatList
                data={data} // Required prop: array ya array of objects hona chahiye
                renderItem={renderItem} // Required prop: function jo har item ko render karega
                keyExtractor={item => item.id} // Required prop: har item ka unique key return karta hai
                showsVerticalScrollIndicator={true} // Optional prop: scroll bar hide karta hai
            />
        </View>
    );
};

export default FlatListScreen;
