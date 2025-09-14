import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MyButton from './src/components/MyButton'
export class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black" }} >
        <Text style={{ fontSize: 24, color: "red", textTransform: "uppercase" }} >tayyab hussain</Text>
        <MyButton />
      </View>
    )
  }
}

export default App
