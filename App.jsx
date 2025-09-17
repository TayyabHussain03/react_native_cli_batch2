import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MyButton from './src/components/MyButton'
import JSX from './src/components/JSX'
import UseStateHook from './src/components/UseStateHook'
import PropTest from './src/components/PropTest'
export class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }} >
        {/* <Text style={{ fontSize: 24, color: "red", textTransform: "uppercase" }} >tayyab hussain</Text>
        <MyButton />
        <JSX />
        <UseStateHook /> */}
        <PropTest/>
      </View>
    )
  }
}

export default App
