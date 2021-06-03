import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Writestory from "../proc70/screens/Writestory"
import Readstory from "../proc70/screens/Readstory"
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"

export default class App extends React.Component {
  render(){
  return (
    <View>
     
      <AppContainer/>
    
    </View>
  );
}
}


const Tabnavigator = createBottomTabNavigator({
  Writestory:{screen:Writestory},
  Readstory:{screen:Readstory}
  })
  
const  AppContainer = createAppContainer(Tabnavigator)

