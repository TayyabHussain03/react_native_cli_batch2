import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0)
    const [score, setScore] = useState(10)

    // useEffect(()=>{
    //     Alert.alert('Important Notice', 'Run UseEffect on every render or state update');
    // })

    // useEffect(() => {
    //     Alert.alert('Important Notice', 'Run UseEffect on first render');
    // }, [])

    // useEffect(() => {
    //     Alert.alert('Important Notice', 'Run UseEffect on counter render');
    // }, [count])

    // useEffect(() => {
    //     Alert.alert('Important Notice', 'Run UseEffect on score render');
    // }, [score])

    // useEffect(() => {
    //     Alert.alert('Important Notice', 'Run UseEffect on score and counter both render');
    // }, [score, count])


    return (
        <View style={{ margin: 12, padding: 8 }}>
            <Text style={{ fontSize: 24 }}>UseEffectHook</Text>
            <Text style={{ fontSize: 24, fontStyle: 'italic' }}>Count: {count}</Text>
            <Text style={{ fontSize: 24, fontStyle: 'italic' }}>Score: {score}</Text>
            <TouchableOpacity style={{ backgroundColor: "green", borderRadius: 10, padding: 12, margin: 12 }} onPress={() => {
                setCount(count + 1)
            }}><Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>COUNTER</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "red", borderRadius: 10, padding: 12, margin: 12 }} onPress={() => {
                setScore(score + 10)
            }}><Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>SCORE</Text></TouchableOpacity>
            <MarksInfo count={count} score={score} />
        </View>
    )
}

const MarksInfo = ({ count, score }) => {
    useEffect(() => {
        Alert.alert('Important Notice', 'Run UseEffect on score render');
    }, [score])

    return (
        <View style={{ margin: 15 }}>
            <Text style={{ fontSize: 24, textAlign: "center", fontStyle: "italic" }}>Info</Text>
            <Text style={{ fontSize: 20, fontStyle: 'italic' }}>Count: {count}</Text>
            <Text style={{ fontSize: 20, fontStyle: 'italic' }}>Score: {score}</Text>
            {/* ✅ Conditional rendering */}
            {score >= 90 && (
                <Text style={{ fontSize: 20, fontStyle: 'italic', textAlign: "center", color: "blue" }}>
                    I am Successful
                </Text>
            )}

        </View>
    )
}

export default UseEffectHook;