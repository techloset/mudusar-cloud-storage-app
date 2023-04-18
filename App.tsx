import React from 'react'
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Onboarding from './src/screens/Onboarding';
import Notification from './src/screens/Notification';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, } from 'react-native';
// import HomeIcon from './src/assets/images/svg/tap-home.svg'
import AccountIcon from './src/assets/images/svg/tap-acount.svg'
import StorageIcon from './src/assets/images/svg/tap-storage.svg'
import NotificationIcon from './src/assets/images/svg/tap-notification.svg'
import ActiveHomeIcon from './src/assets/images/svg/tap-acount.svg'
import ActiveNotificationIcon from './src/assets/images/svg/active-notification-icon.svg'
import ActiveStorageIcon from './src/assets/images/svg/active-storage-icon.svg'
import ActiveAcountIcon from './src/assets/images/svg/active-acount-icon.svg'
import CloudIcon from './src/assets/images/svg/tap-cloud.svg'
import PlusIcon from './src/assets/images/svg/plus-icon.svg'
import CrossIcon from './src/assets/images/svg/crossIcon.svg'
import LocalStorage from './src/screens/LocalStorage';
import Profile from './src/screens/Profile';
import StorageManagement from './src/screens/StorageManagement';
import Upload from './src/screens/Upload';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeTabs() {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { height: 70 }, tabBarHideOnKeyboard: true }} >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ color, size, focused }) => {
          return (
            focused ? <Text style={{
              padding: 10, backgroundColor: '#E8EFFF', borderRadius: 15,
              shadowOpacity: 3, elevation: 10, shadowOffset: { width: 10, height: 10 }, shadowColor: 'grey'
            }}><ActiveAcountIcon /></Text> : <CloudIcon />
          )
        },
        tabBarLabel: () => {
          return null
        },
      }} />
      <Tab.Screen name="LocalStorage" component={LocalStorage} options={{
        tabBarIcon: ({ color, size, focused }) => {
          return (
            focused ? <Text style={{
              padding: 10, backgroundColor: '#E8EFFF', borderRadius: 15,
              shadowOpacity: 3, elevation: 10, shadowOffset: { width: 10, height: 10 }, shadowColor: 'grey'
            }}><ActiveStorageIcon /></Text> : <StorageIcon />
          )
        },
        tabBarLabel: () => {
          return null
        },
      }} />
      <Tab.Screen name='Upload' component={Upload}
        options={{
          tabBarIcon({ focused, size }) {
            return focused ?
              <TouchableOpacity onPress={() => { focused == true }} style={styles.activeButtonStyle} >
                <Pressable><CrossIcon height={14} width={14} style={styles.activeStyle} /></Pressable>
              </TouchableOpacity> :
              <TouchableOpacity onPress={() => { focused == false; setModalVisible(true) }} style={styles.button} >
                <Pressable><PlusIcon height={14} width={14} style={styles.buttonTitle} /></Pressable>
              </TouchableOpacity>
          },
          tabBarLabel: () => {
            return null
          },
        }} />
      <Tab.Screen name="Notification" component={Notification}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              focused ? <Text style={{
                padding: 10, backgroundColor: '#E8EFFF', borderRadius: 15,
                shadowOpacity: 3, elevation: 10, shadowOffset: { width: 10, height: 10 }, shadowColor: 'grey'
              }}><ActiveNotificationIcon /></Text> : <NotificationIcon />
            )
          },
          tabBarLabel: () => {
            return null
          },
        }}
      />
      <Tab.Screen name="Storage" component={Storage} options={{
        tabBarIcon: ({ color, size, focused }) => {
          return (
            focused ? <Text style={{
              padding: 10, backgroundColor: '#E8EFFF', borderRadius: 15,
              shadowOpacity: 3, elevation: 10, shadowOffset: { width: 10, height: 10 }, shadowColor: 'grey'
            }}><ActiveAcountIcon /></Text> : <AccountIcon />
          )
        },
        tabBarLabel: () => {
          return null
        },
      }} />


    </Tab.Navigator>
  );
}


function Storage() {
  return (
    <Stack.Navigator initialRouteName='Profile' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="StorageManagement" component={StorageManagement} />

    </Stack.Navigator>)
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}
        initialRouteName='Onboarding'>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="HomeScreen" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#959FBA',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 18,
    transform: [{ rotate: '45deg' }],
    // marginRight: 45, marginTop: 17, marginBottom: 32

  },
  buttonTitle: {
    transform: [{ rotate: '-45deg' }],
    // padding: 40
    // height: 48,
    // width: 48

  },
  activeButtonStyle: {
    backgroundColor: '#E8EFFF',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 18,
    // transform: [{ rotate: '45deg' }],
  },
  activeStyle: {
    transform: [{ rotate: '0deg' }],

  }
})
export default App