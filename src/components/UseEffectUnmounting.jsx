import { View, Text } from 'react-native'
import React, { useState } from 'react'
import ChildComponentUnmounting from './ChildComponentUnmounting'

const UseEffectUnmounting = () => {
    const [show, setShow] = useState(true)
    return (
        <View>
            <Text style={{ fontSize: 28 }}>Parent Component</Text>
            {
                show ? <ChildComponentUnmounting /> : null
            }

            <Button title="toggle" onPress={() => {
                setShow(!show)
            }} />
        </View>
    )
}

export default UseEffectUnmounting