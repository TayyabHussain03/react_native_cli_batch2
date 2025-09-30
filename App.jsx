// import React, { Component } from 'react'
// import { Text, View } from 'react-native'
// import MyButton from './src/components/MyButton'
// import JSX from './src/components/JSX'
// import UseStateHook from './src/components/UseStateHook'
// import PropTest from './src/components/PropTest'
// import InputText from './src/components/InputText.jsx'
// import Styling from './src/components/Styling.jsx'
// import FlatListScreen from './src/components/FlatListScreen.jsx'
// import SectionListScreen from './src/components/SectionListScreen.jsx'
// import Login from './src/components/Login.jsx'
// import UserContact from './src/screens/ContactList/UserContact.jsx'
// import Grid from './src/components/Grid.jsx'
// import UseEffectHook from './src/components/UseEffectHook.jsx'
// import UseEffectUnmounting from './src/components/UseEffectUnmounting.jsx'
// import StylingButton from './src/components/StylingButton.jsx'
// import LoaderToggle from './src/components/LoaderToggle.jsx'
// import Presable from './src/components/Presable.jsx'
// import StatusBarComponent from './src/components/StatusBarComponent.jsx'
// import UseRefExample from './src/components/UseRefExample.jsx'
// import ModalDialogBox from './src/components/ModalDialogBox.jsx'
// import AlertExample from './src/components/AlertExample.jsx'
// import GET_API from './src/components/GET_API.jsx'
// import POST_API from './src/components/POST_API.jsx'
// import PUT_API from './src/components/PUT_API.jsx'
// import PATCH_API from './src/components/PATCH_API.jsx'
// import DELETE_API from './src/components/DELETE_API.jsx'
// import GET_API_LIST from './src/components/GET_API_LIST.jsx'
// import PlatformExample from './src/components/PlatformExample.jsx'
// import Search from './src/components/Search.jsx'

// const App = () => {
//   return (
//     <View style={{ flex: 1, backgroundColor: "white" }} >
//       {/* <Text style={{ fontSize: 24, color: "red", textTransform: "uppercase" }} >tayyab hussain</Text> */}
//       {/* <MyButton /> */}
//       {/* <JSX /> */}
//       {/* <UseStateHook /> */}
//       {/* <PropTest/> */}
//       {/* <InputText /> */}
//       {/* <Styling/> */}
//       {/* <FlatListScreen/> */}
//       {/* <SectionListScreen/> */}
//       {/* <Login /> */}
//       {/* <UserContact /> */}
//       {/* <Grid/> */}
//       {/* <UseEffectHook/> */}
//       {/* <UseEffectUnmounting/> */}
//       {/* <StylingButton/> */}
//       {/* <LoaderToggle/> */}
//       {/* <Presable/> */}
//       {/* <StatusBarComponent/> */}
//       {/* <UseRefExample/> */}
//       {/* <ModalDialogBox/> */}
//       {/* <AlertExample/> */}
//       {/* <GET_API/> */}
//       {/* <POST_API /> */}
//       {/* <PUT_API /> */}
//       {/* <PATCH_API /> */}
//       {/* <DELETE_API /> */}
//       {/* <GET_API_LIST /> */}
//       {/* <PlatformExample/> */}
//       <Search />
//     </View>
//   )
// }

// export default App


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ✅ Importing screens
import Home from './src/react-navigation/Home';
import About from './src/react-navigation/About';
import Login from './src/react-navigation/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false // ✅ This hides the default header bar on all screens
        }}
      >
        {/* ✅ Registering screens in the stack */}
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />

        {/* - Tum per-screen bhi headerShown set kar sakte ho:
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
