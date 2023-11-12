import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {  useFonts, Montserrat_700Bold, Montserrat_600SemiBold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LogosInstitucion from '../../../../../LogosInstitucion';
import TabNavigation from '../../../../navigation/TabNavigation';


const OpcUsuarios = ({navigation}) => {

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

    <Text style={{ color: '#1B396A', fontFamily: 'Montserrat_700Bold', fontSize: 15, top: -10, marginBottom: 330, maxWidth: 200, textAlign: "center" }}>Seleccione una opción</Text>   
    
            <TouchableOpacity 
                style={{backgroundColor: '#1B396A', opacity: 0.8, width:125, height: 100, padding: 20, borderRadius: 20, top: -270, marginVertical:'auto', alignItems:'center'}}
                onPress={() => navigation.navigate('Nuevo_Usuario')}
            > 

                <AntDesign name="addfile" size={33} color="white" />    
                <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 12, textAlign: 'center', top:10}}>Nuevo Usario</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={{backgroundColor: '#1B396A', opacity: 0.8, width:125, height: 100, padding: 17, borderRadius: 20, top: -190, marginVertical:'auto', alignItems:'center'}}
            
            > 

                <MaterialCommunityIcons name="file-search-outline" size={35} color="white" />    
                <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 12, textAlign: 'center', top:7}}>Lista de Usario</Text>
            </TouchableOpacity>            

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
export default OpcUsuarios;