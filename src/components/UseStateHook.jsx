import React, { useState } from "react";
import { Button, View,Text } from "react-native";

const UseStateHook = () => {
    const [name, setName] = useState("Tayyab")
    return (
        <View>
            <Text>UseSateHook</Text>
            <Text style={{ color: "black" }}>Name: {name}</Text>
            <Button color="red" title="Press me to update" onPress={() => setName("Tayyab Hussain")} />
        </View>
    );
};

export default UseStateHook;
