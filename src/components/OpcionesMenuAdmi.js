import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {  useFonts, Montserrat_700Bold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const OpcionesMenuAdmi = ({navigation}) => {

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
                onPress={() => navigation.navigate('OpcUsuarios')}
            > 

                <Ionicons name="people" size={33} color="white" />
                <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 12, textAlign: 'center', top:5}}>Usuarios</Text>
            </TouchableOpacity>


            <TouchableOpacity 
                style={{backgroundColor: '#1B396A', opacity: 0.8, width:120, height: 100, padding: 18, borderRadius: 20, top: -300, marginLeft:180, alignItems:'center'}}
                onPress={() => navigation.navigate('OpcEquipos')}
            > 

                <Ionicons name="desktop" size={33} color="white" />
                <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 12, textAlign: 'center', top:8}}>Equipos</Text>
            </TouchableOpacity>

             
            <TouchableOpacity 
                style={{backgroundColor: '#1B396A', opacity: 0.8, width:120, height: 100, padding: 20, borderRadius: 20, top: -250, marginRight:180, alignItems:'center'}}
            
            > 

                <AntDesign name="filetext1" size={33} color="white">

                </AntDesign>
          
             <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 12, textAlign: 'center', top:10}}>Préstamos</Text>
            </TouchableOpacity>


            <TouchableOpacity 
                style={{backgroundColor: '#1B396A', opacity: 0.8, width:120, height: 100, padding: 20, borderRadius: 20, top: -350, marginLeft:180, alignItems:'center'}}
            
            > 

             <MaterialCommunityIcons name="qrcode-scan" size={33} color="white" />
             <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 12, textAlign: 'center', top:10}}>Código QR</Text>
            </TouchableOpacity>


            <TouchableOpacity 
                style={{backgroundColor: '#1B396A', opacity: 0.8, width:120, height: 100, padding: 20, borderRadius: 20, top: -300, marginVertical:'auto', alignItems:'center'}}
            
            > 

                <Ionicons name="stats-chart-sharp" size={33} color="white" />
                <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 12, textAlign: 'center', top:10}}>Estadísticas</Text>
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