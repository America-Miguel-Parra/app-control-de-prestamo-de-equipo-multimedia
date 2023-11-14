import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {  useFonts, Montserrat_700Bold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import Ionicons from '@expo/vector-icons/Ionicons';

const ButtonsHome = ({ navigation }) => {

    let [fontsLoaded] = useFonts({
        Montserrat_700Bold,
        Montserrat_600SemiBold,
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return(
        <View style={styles.container}>
            
            <TouchableOpacity 
            style={{backgroundColor: '#1B396A', width:200, height: 50, padding: 10, borderRadius: 30, top:-290, alignItems:'center'}}
            onPress={() => navigation.navigate('Login_Admi')}
            > 

          <Ionicons name="person" size={22} color="white">
          <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 14}}>   Administrador</Text>
          </Ionicons>
          
             </TouchableOpacity>

             <TouchableOpacity 
             style={{backgroundColor: '#1B396A', width:200, height: 50, padding: 10, borderRadius: 30, top:-220, alignItems:'center'}}
             onPress={() => navigation.navigate('Login_Personal')}
             > 
          
          <Ionicons name="people" size={24} color="white">
          <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 14}}>   Personal</Text>
          </Ionicons>
          
          </TouchableOpacity>

            
        </View>
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

export default ButtonsHome;

