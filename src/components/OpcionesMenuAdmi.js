import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {  useFonts, Montserrat_700Bold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const OpcionesMenuAdmi = () => {

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
                style={{backgroundColor: '#1B396A', opacity: 0.8,  width:120, height: 100, padding: 20, borderRadius: 20, top: -200, marginRight:180, alignItems:'center'}}
            
            > 

                <Ionicons name="people" size={30} color="white">
          
                </Ionicons>
                <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 12, textAlign: 'center', padding: 3}}>Usuarios</Text>
            </TouchableOpacity>


            <TouchableOpacity 
                style={{backgroundColor: '#1B396A', opacity: 0.8, width:120, height: 100, padding: 20, borderRadius: 20, top: -330, marginLeft:180, alignItems:'center'}}
            
            > 

                <Ionicons name="desktop" size={30} color="white">
          
                </Ionicons>
                <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 12, textAlign: 'center', padding: 5}}>Equipos</Text>
            </TouchableOpacity>

             
            <TouchableOpacity 
                style={{backgroundColor: '#1B396A', opacity: 0.8, width:120, height: 100, padding: 20, borderRadius: 20, top: -280, marginRight:180, alignItems:'center'}}
            
            > 

                <AntDesign name="filetext1" size={30} color="white">

                </AntDesign>
          
             <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 12, textAlign: 'center', padding: 5}}>Préstamos</Text>
            </TouchableOpacity>


            <TouchableOpacity 
                style={{backgroundColor: '#1B396A', opacity: 0.8, width:120, height: 100, padding: 20, borderRadius: 20, top: -380, marginLeft:180, alignItems:'center'}}
            
            > 

             <MaterialCommunityIcons name="qrcode-scan" size={30} color="white" />
             <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 12, textAlign: 'center', padding: 5}}>Código QR</Text>
            </TouchableOpacity>


            <TouchableOpacity 
                style={{backgroundColor: '#1B396A', opacity: 0.8, width:120, height: 100, padding: 20, borderRadius: 20, top: -335, marginVertical:'auto', alignItems:'center'}}
            
            > 

                <Ionicons name="stats-chart-sharp" size={30} color="white" />
                <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 12, textAlign: 'center', padding: 3}}>Estadísticas</Text>
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

export default OpcionesMenuAdmi;