import React from 'react';
import { View, Dimensions, StyleSheet, StatusBar } from 'react-native';
import Route from './src/router'
const { width, height } = Dimensions.get('screen');
function App(props) {
  return(
  <>
  <StatusBar   backgroundColor={'#ab000d'}/>
  <Route/>
  </>) 
}

export default App;