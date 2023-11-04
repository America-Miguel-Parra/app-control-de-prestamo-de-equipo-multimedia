import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';



export default function App() {
  
  return (
    
    <NavigationContainer>
    <NavigationStack/>
  </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  responsiveBox: {
    width: '80%',
    height: '50%',

  }, 


});


