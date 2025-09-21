import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0)

    // useEffect(()=>{
    //     Alert.alert('Important Notice', 'Run UseEffect on every render or state update');
    // })

    useEffect(()=>{
        Alert.alert('Important Notice', 'Run UseEffect on first render');
    },[])
    return (
        <View style={{margin:12,padding:8}}>
            <Text style={{ fontSize: 24 }}>UseEffectHook</Text>
            <Text style={{ fontSize: 24, fontStyle: 'italic' }}>Count: {count}</Text>
            <TouchableOpacity style={{backgroundColor:"green", borderRadius:10, padding:12, margin:12}} onPress={() => {
                setCount(count + 1)
            }}><Text style={{color:"white", textAlign:"center", fontSize:16}}>Increment</Text></TouchableOpacity>
        </View>
    )
}

export default UseEffectHook;