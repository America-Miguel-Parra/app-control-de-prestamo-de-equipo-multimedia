
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import {  useFonts, Montserrat_700Bold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import ButtonsHome from '../../components/ButtonsHome';
import LogoComponent from '../../../LogoComponent';



const Index_Home = ({ navigation }) =>{

    let [fontsLoaded] = useFonts({
        Montserrat_700Bold,
        Montserrat_600SemiBold,
      });
    
      if (!fontsLoaded) {
        return null;
      }
    
  
  return (
    <LinearGradient
        colors={['#FFFFFF', '#1B396A']}
        style={styles.container}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
      >

        <LogoComponent/>

        <Text style={{top: 110, marginBottom: 10, color: '#A9A7AA'}}> ────────────────────</Text>
        
        <Text style={{ color: '#1B396A', fontFamily: 'Montserrat_700Bold', fontSize: 14, top: 123, marginBottom: 430, maxWidth: 200, textAlign: "center" }}>Control de Préstamo de Equipos Multimedia</Text>

        <ButtonsHome navigation={navigation} />

        

      

      </LinearGradient>
    
      
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

export default Index_Home;
