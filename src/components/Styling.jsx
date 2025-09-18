import { View, Text, StyleSheet } from 'react-native'
import styles from './styling/styles'
import React from 'react'

const Styling = () => {
    return (
        <View>
            <Text style={
                {
                    backgroundColor: "crimson",
                    color: "white",
                    fontSize: 14,
                    textAlign: "center",
                    fontWeight: "bold",
                    marginVertical: 8,
                    padding: 8
                }
            }>Inline Styling</Text>

            <Text style={style.text}>Internal Styling</Text>

            <Text style={styles.text}>External Styling</Text>

            <Text style={
                [
                    {
                        backgroundColor: "yellow",
                        color: "white",
                        fontSize: 14,
                        textAlign: "center",
                        fontWeight: "bold",
                        marginVertical: 8,
                        padding: 8
                    },
                    styles.text,
                    style.text
                ]}
            >Mix Styling</Text>
        </View>
    )
}

export default Styling

const style = StyleSheet.create({
    text: {
        backgroundColor: "darkblue",
        color: "white",
        fontSize: 14,
        textAlign: "center",
        fontWeight: "bold",
        marginVertical: 8,
        padding: 8
    }
})