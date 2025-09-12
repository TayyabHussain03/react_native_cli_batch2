import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class App extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"black"}} >
        <Text style={{fontSize: 32, color:"red", textTransform:"uppercase"}} >tayyab hussain</Text>
      </View>
    )
  }
}

export default App
