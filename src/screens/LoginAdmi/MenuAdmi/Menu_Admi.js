import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {  useFonts, Montserrat_700Bold, Montserrat_600SemiBold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import LogosInstitucion from '../../../../LogosInstitucion';
import OpcionesMenuAdmi from '../../../components/OpcionesMenuAdmi';
import TabNavigation from '../../../navigation/TabNavigation';


const Menu_Admi = ({navigation}) => {

    let [fontsLoaded] = useFonts({
        Montserrat_700Bold,
        Montserrat_600SemiBold,
      });
    
      if (!fontsLoaded) {
        return null;
      }
      
    return(
        
        <LinearGradient
        colors={['#FFFFFF', '#1B396A']}
        style={styles.container}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
    >

    <LogosInstitucion/>  
      
    <Text style={{top: 10, marginBottom: 40, color: '#A9A7AA'}}> ────────────────────</Text> 

    <Text style={{ color: '#1B396A', fontFamily: 'Montserrat_700Bold', fontSize: 15, top: -10, marginBottom: 430, maxWidth: 200, textAlign: "center" }}>Seleccione una opción</Text>   
        
    <OpcionesMenuAdmi navigation={navigation}/>

    <TabNavigation navigation={navigation}/>

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
export default Menu_Admi