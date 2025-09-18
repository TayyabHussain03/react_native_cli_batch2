import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MyButton from './src/components/MyButton'
import JSX from './src/components/JSX'
import UseStateHook from './src/components/UseStateHook'
import PropTest from './src/components/PropTest'
import InputText from './src/components/InputText.jsx'
import Styling from './src/components/Styling.jsx'

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }} >
      {/* <Text style={{ fontSize: 24, color: "red", textTransform: "uppercase" }} >tayyab hussain</Text> */}
      {/* <MyButton /> */}
      {/* <JSX /> */}
      {/* <UseStateHook /> */}
      {/* <PropTest/> */}
      {/* <InputText /> */}
      <Styling/>
    </View>
  )
}

export default App
