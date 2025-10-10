import React from 'react'
import { Text, View } from 'react-native'

const JSX = () => {
    let role = "Software Engineer"
    const getAge = () => {
        return 22
    }

    return (
        <View>
            <Text style={{ fontSize: 28, fontStyle: "italic", color: "yellow" }}>MERN Developer</Text>
            <Text style={{ fontSize: 28, fontStyle: "italic", color: "white" }}>{role}</Text>
            <Text style={{ fontSize: 28, fontStyle: "italic", color: "white" }}>{getAge()}</Text>
        </View>
    );
};

export default JSX;
