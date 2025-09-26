import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MyButton from './src/components/MyButton'
import JSX from './src/components/JSX'
import UseStateHook from './src/components/UseStateHook'
import PropTest from './src/components/PropTest'
import InputText from './src/components/InputText.jsx'
import Styling from './src/components/Styling.jsx'
import FlatListScreen from './src/components/FlatListScreen.jsx'
import SectionListScreen from './src/components/SectionListScreen.jsx'
import Login from './src/components/Login.jsx'
import UserContact from './src/screens/ContactList/UserContact.jsx'
import Grid from './src/components/Grid.jsx'
import UseEffectHook from './src/components/UseEffectHook.jsx'
import UseEffectUnmounting from './src/components/UseEffectUnmounting.jsx'
import StylingButton from './src/components/StylingButton.jsx'
import LoaderToggle from './src/components/LoaderToggle.jsx'
import Presable from './src/components/Presable.jsx'
import StatusBarComponent from './src/components/StatusBarComponent.jsx'
import UseRefExample from './src/components/UseRefExample.jsx'
import ModalDialogBox from './src/components/ModalDialogBox.jsx'
import AlertExample from './src/components/AlertExample.jsx'
import GET_API from './src/components/GET_API.jsx'
import POST_API from './src/components/POST_API.jsx'
import PUT_API from './src/components/PUT_API.jsx'
import PATCH_API from './src/components/PATCH_API.jsx'

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }} >
      {/* <Text style={{ fontSize: 24, color: "red", textTransform: "uppercase" }} >tayyab hussain</Text> */}
      {/* <MyButton /> */}
      {/* <JSX /> */}
      {/* <UseStateHook /> */}
      {/* <PropTest/> */}
      {/* <InputText /> */}
      {/* <Styling/> */}
      {/* <FlatListScreen/> */}
      {/* <SectionListScreen/> */}
      {/* <Login /> */}
      {/* <UserContact /> */}
      {/* <Grid/> */}
      {/* <UseEffectHook/> */}
      {/* <UseEffectUnmounting/> */}
      {/* <StylingButton/> */}
      {/* <LoaderToggle/> */}
      {/* <Presable/> */}
      {/* <StatusBarComponent/> */}
      {/* <UseRefExample/> */}
      {/* <ModalDialogBox/> */}
      {/* <AlertExample/> */}
      {/* <GET_API/> */}
      {/* <POST_API /> */}
      {/* <PUT_API /> */}
      <PATCH_API />
    </View>
  )
}

export default App
