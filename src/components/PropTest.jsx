import { View, Text } from 'react-native'
import React from 'react'
import ChildComp from './ChildComp'

const PropTest = () => {
  return (
    <View>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>Props Example</Text>
      <ChildComp name="Tayyab Hussain" age={22} />
    </View>
  )
}

export default PropTest
