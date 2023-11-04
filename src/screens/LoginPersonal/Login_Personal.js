import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {  useFonts, Montserrat_700Bold, Montserrat_600SemiBold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';

export default function Login_Personal (){
    let [fontsLoaded] = useFonts({
        Montserrat_700Bold,
        Montserrat_600SemiBold,
        Montserrat_400Regular,
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
    <Text style={{top: 5, marginBottom: 40, color: '#A9A7AA'}}> ────────────────────</Text>    
        
        <View style={styles.login}>
        <View style={styles.headerlogin}>
        <Text style={{ color: '#FFFFFF', fontFamily: 'Montserrat_600SemiBold', fontSize: 14, padding: 12, textAlign: "center" }}>Personal</Text>
        </View>
        <TextInput 
        placeholder='Usuario'
        style={styles.placeholderusuario}
        />

        <TextInput 
        placeholder='Clave de acceso'
        style={styles.placeholderacceso}
        />
        
        <TouchableOpacity style={{backgroundColor: '#1B396A', width:110, height: 50, padding: 5, borderRadius: 30, marginTop: 50, marginLeft: 70}}> 
          <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 14, padding:10}}>Continuar</Text>
        </TouchableOpacity>
        </View>

    </LinearGradient>
    );
}

const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
     
      
    },

    login: {
        width: 250,
        height: 350,
        backgroundColor: 'white',
        borderRadius: 18,
    },

    headerlogin: {
        width: 250,
        height: 45,
        backgroundColor: '#1B396A',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        
    },

    placeholderusuario: {
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'center',
        fontSize: 14,
        width: 200,
        height: 40,
        marginTop: 35,
        marginLeft: 27,
        backgroundColor: '#EDEDED',
        borderRadius: 10,
    },

    placeholderacceso: {
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'center',
        fontSize: 14,
        width: 200,
        height: 40,
        marginTop: 60,
        marginLeft: 27,
        backgroundColor: '#EDEDED',
        borderRadius: 10,
    },
    
    responsiveBox: {
      width: '80%',
      height: '50%',
  
    }, 
  
  
  });
