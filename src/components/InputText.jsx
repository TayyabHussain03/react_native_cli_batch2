import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const InputText = () => {
    const [name, setName] = useState('')
    return (
        <View>
            <Text>InputText</Text>
            <Text>Username: {name}</Text>
            <TextInput
                style={{ borderWidth: 2, borderColor: "red", fontSize: 14, padding: 14, color: "black" }}
                placeholder='Enter Your Name'
                placeholderTextColor="grey"
                value={name}
                onChangeText={(data) => {
                    setName(data)
                }}
            />
            <Button title="Clear Text" onPress={() => { setName('') }} />

        </View>
    )
}

export default InputText