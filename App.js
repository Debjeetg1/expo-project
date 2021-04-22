import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {createSwitchNavigator, createAppContainer } from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';

import AppTabNavigator from './componentss/AppTabNavigator';




export default function App()
{
  return(

      <AppContainer/>
   
  )
}



const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {screens:  WelcomeScreen},
  AppTabNavigator:  {screens: AppTabNavigator},
})

const AppContainer = createAppContainer(switchNavigator);

