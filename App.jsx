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
// import UsernameStorage from './src/components/UsernameStorage.jsx'
// import ImageComponent from './src/components/ImageComponent.jsx'
// import Parent from './src/components/Parent.jsx'

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
//       {/* <Search /> */}
//       {/* <UsernameStorage /> */}
//       {/* <ImageComponent /> */}
//       <Parent />
//     </View>
//   )
// }

// export default App


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // ✅ Importing screens
// import Home from './src/react-navigation/Home';
// import About from './src/react-navigation/About';
// import Login from './src/react-navigation/Login';
// import MyHeader from './src/react-navigation/MyHeader';
// import Example from './src/react-navigation/Example'

// const Stack = createNativeStackNavigator();

// // const HeaderLeft = () => <Button title='Left' color='lightblue' onPress={hello} />
// // const HeaderRight = () => <Button title='Right' color='lightgreen' onPress={hello} />

// // const hello = () => {
// //   Alert.alert("Hello", "Hello User")
// // }

// const MyExample = () => <Example />


// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: '#1e272e', // Dark elegant header
//             elevation: 4,               // Android shadow
//             shadowColor: '#000',        // iOS shadow
//             shadowOpacity: 0.2,
//             shadowOffset: { width: 0, height: 2 },
//             shadowRadius: 6
//           },
//           headerTitleStyle: {
//             fontSize: 22,
//             fontWeight: 'bold',
//             color: '#00cec9',
//             letterSpacing: 1
//           },
//           headerTintColor: '#ffffff', // Back button & icon color
//           contentStyle: {
//             backgroundColor: '#f5f6fa', // Light clean background
//             paddingHorizontal: 16,
//             paddingVertical: 10
//           }
//         }}

//       >
//         {/* ✅ Registering screens in the stack */}
//         // ❌ Cons: JSX-based headerTitle renders slower than plain string title
//         // ❌ Not ideal for static screens — adds unnecessary component lifecycle
//         // ❌ Harder to maintain if reused across many screens without abstraction
//         {/* <Stack.Screen name="Header" component={MyHeader}
//           options={
//             {
//               title: "",
//               headerTitle: () => <Button title='Left' color='lightblue' />,
//               headerRight: () => <Button title='Right' color='lightgreen' />
//             }
//           } /> */}

//         {/* // ✅ Better Approach
//         <Stack.Screen name="Header" component={MyHeader}
//           options={
//             {
//               title: "",
//               headerTitle: HeaderLeft,
//               headerRight: HeaderRight
//             }
//           } /> */}

//           // ✅ UserDefined
//         <Stack.Screen name="Header" component={MyHeader}
//           options={
//             {
//               title: "",
//               headerTitle: MyExample,
//             }
//           } />

//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="About" component={About} />

//         {/* - Tum per-screen bhi headerShown set kar sakte ho:
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{ headerShown: false }}
//         /> */}

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// ***********************Drawer Navigation******************

// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import "react-native-gesture-handler"

// // ✅ Importing screens
// const Home = ({ navigation }) => (
//   <View
//     style={{
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#f5f6fa'
//     }}
//   >
//     <Text
//       style={{
//         fontSize: 28,
//         fontWeight: 'bold',
//         color: '#2f3640',
//         marginBottom: 20
//       }}
//     >
//       Home
//     </Text>

//     <TouchableOpacity
//       onPress={() => navigation.openDrawer()}
//       style={{
//         backgroundColor: '#00a8ff',
//         paddingVertical: 12,
//         paddingHorizontal: 24,
//         borderRadius: 10,
//         elevation: 3
//       }}
//       activeOpacity={0.7}
//     >
//       <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
//         Open Drawer
//       </Text>
//     </TouchableOpacity>
//   </View>
// );

// const About = ({ navigation }) => (
//   <View
//     style={{
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#f5f6fa'
//     }}
//   >
//     <Text
//       style={{
//         fontSize: 28,
//         fontWeight: 'bold',
//         color: '#2f3640',
//         marginBottom: 20
//       }}
//     >
//       About
//     </Text>

//     <TouchableOpacity
//       onPress={() => navigation.openDrawer()}
//       style={{
//         backgroundColor: '#00a8ff',
//         paddingVertical: 12,
//         paddingHorizontal: 24,
//         borderRadius: 10,
//         elevation: 3
//       }}
//       activeOpacity={0.7}
//     >
//       <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
//         Open Drawer
//       </Text>
//     </TouchableOpacity>
//   </View>
// );




// const Drawer = createDrawerNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         screenOptions={{
//           // ✅ drawerStyle: Drawer ka background aur width set karta hai
//           drawerStyle: {
//             backgroundColor: '#f1f2f6', // Light elegant background
//             width: 240 // Drawer ki width in pixels
//           },

//           // ✅ drawerLabelStyle: Drawer ke labels ka font aur color define karta hai
//           drawerLabelStyle: {
//             fontSize: 16,
//             fontWeight: '600',
//             color: '#2f3640',
//             marginLeft: -10 // Thoda left shift for cleaner alignment
//           },

//           // ✅ headerStyle: Top header bar ka background aur shadow
//           headerStyle: {
//             backgroundColor: '#00a8ff', // Vibrant blue header
//             elevation: 4,
//             shadowColor: '#000',
//             shadowOpacity: 0.2,
//             shadowOffset: { width: 0, height: 2 },
//             shadowRadius: 6
//           },

//           // ✅ headerTintColor: Back button aur icons ka color
//           headerTintColor: '#fff',

//           // ✅ headerTitleAlign: Title ko center ya left align karta hai
//           headerTitleAlign: 'center',

//           // ✅ headerTitleStyle: Title text ka font aur spacing
//           headerTitleStyle: {
//             fontSize: 20,
//             fontWeight: 'bold',
//             letterSpacing: 1
//           },

//           // ✅ contentStyle: Screen background aur padding
//           contentStyle: {
//             backgroundColor: '#ffffff',
//             paddingHorizontal: 16,
//             paddingVertical: 10
//           }
//         }}
//       >
//         {/* ✅ Drawer.Screen: Har screen ko drawer mein register karta hai */}
//         <Drawer.Screen name="Home" component={Home} />
//         <Drawer.Screen name="About" component={About} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


// ***********************Bottom Tab Navigation******************

// import React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const Tab = createBottomTabNavigator();

// // ✅ Home Screen Component
// const HomeScreen = () => (
//   <View style={{
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f6fa'
//   }}>
//     <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2f3640' }}>
//       Home Screen
//     </Text>
//   </View>
// );

// // ✅ Profile Screen Component
// const ProfileScreen = () => (
//   <View style={{
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f6fa'
//   }}>
//     <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2f3640' }}>
//       Profile Screen
//     </Text>
//   </View>
// );

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           // ✅ tabBarIcon: Icon show karta hai har tab ke liye
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused ? 'home' : 'home-outline';
//             } else if (route.name === 'Profile') {
//               iconName = focused ? 'person' : 'person-outline';
//             }

//             return <Ionicons name={iconName} size={size} color={color} />;
//           },

//           // ✅ tabBarActiveTintColor: Active tab ka icon/text color
//           tabBarActiveTintColor: '#00a8ff',

//           // ✅ tabBarInactiveTintColor: Inactive tab ka icon/text color
//           tabBarInactiveTintColor: '#636e72',

//           // ✅ tabBarStyle: Tab bar ka background aur spacing
//           tabBarStyle: {
//             backgroundColor: '#dfe6e9',
//             paddingBottom: 5,
//             height: 60
//           },

//           // ✅ headerShown: Top header ko hide karta hai
//           headerShown: false
//         })}
//       >
//         {/* ✅ Tab Screens */}
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


// **********************Top Tab*********************

// import React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tab = createMaterialTopTabNavigator();

// // ✅ Home Screen Component
// const HomeScreen = () => (
//   <View style={{
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f6fa'
//   }}>
//     <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2f3640' }}>
//       Home Screen
//     </Text>
//   </View>
// );

// // ✅ Profile Screen Component
// const ProfileScreen = () => (
//   <View style={{
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f6fa'
//   }}>
//     <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2f3640' }}>
//       Profile Screen
//     </Text>
//   </View>
// );

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           // ✅ tabBarStyle: Top tab bar ka background aur height
//           tabBarStyle: {
//             backgroundColor: '#1e272e', // Dark techy background
//             height: 50
//           },

//           // ✅ tabBarLabelStyle: Tab label ka font aur spacing
//           tabBarLabelStyle: {
//             fontSize: 16,
//             fontWeight: '600',
//             textTransform: 'none' // Prevents auto-uppercase
//           },

//           // ✅ tabBarActiveTintColor: Active tab text color
//           tabBarActiveTintColor: '#00ce82',

//           // ✅ tabBarInactiveTintColor: Inactive tab text color
//           tabBarInactiveTintColor: '#dcdde1',

//           // ✅ tabBarIndicatorStyle: Active tab ke neeche underline
//           tabBarIndicatorStyle: {
//             backgroundColor: '#00ce82',
//             height: 3,
//             borderRadius: 2
//           },

//           // ✅ tabBarPressColor: Ripple effect on tab press
//           tabBarPressColor: '#74b9ff'
//         }}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


// *************************Redux Toolkit and NativeWind**************************

// ✅ Importing React
import React from 'react';
import { Text } from 'react-native'

// ✅ Importing Provider from react-redux
// Provider is a higher-order component that makes the Redux store available to all components
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
import Counter from './src/components/Counter';
import ZustandCounter from './src/components/ZustandCounter'
import NativewindLogin from './src/components/NativewindLogin'
import FlipNatureCard from './src/components/FlipNatureCard'
import SwitchUI from './src/components/SwitchUi'
import FirebaseRegister from './src/components/FirebaseRegister'

const App = () => {
  return (
    // <Provider store={store}>
    //   {/* ✅ Counter component will now have access to Redux state */}
    //   <Counter />
    //   <ZustandCounter/>
    // </Provider>

    // <NativewindLogin/>
    // <FlipNatureCard />
    // <SwitchUI />
    <FirebaseRegister />
    // <Text style={{ fontSize: 28, fontWeight: "bold", textAlign: "center", color:"white" }}>Firebase Added Successfully</Text>
  );
};

export default App;
