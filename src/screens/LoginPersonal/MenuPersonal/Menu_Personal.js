import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {  useFonts, Montserrat_700Bold, Montserrat_600SemiBold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LogosInstitucion from '../../../../LogosInstitucion';



const Menu_Personal = ({navigation}) => {

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
      
    <Text style={{top: 10, marginBottom: 47, color: '#A9A7AA'}}> ────────────────────</Text> 

    <Text style={{ color: '#1B396A', fontFamily: 'Montserrat_700Bold', fontSize: 15, top: -14, marginBottom: 360, maxWidth: 200, textAlign: "center" }}>Seleccione una opción</Text>   
    
            <TouchableOpacity 
                style={{backgroundColor: '#1B396A', opacity: 0.8, width:125, height: 100, padding: 10, borderRadius: 20, top: -270, marginVertical:'auto', alignItems:'center'}}
                onPress={() => navigation.navigate('Nuevo_Prestamo')}
            > 

                <AntDesign name="addfile" size={33} color="white" top={8}/>    
                <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 12, textAlign: 'center', top:18}}>Nuevo Préstamo</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={{backgroundColor: '#1B396A', opacity: 0.8, width:125, height: 100, padding: 17, borderRadius: 20, top: -190, marginVertical:'auto', alignItems:'center'}}
            
            > 

                <MaterialCommunityIcons name="file-search-outline" size={35} color="white" />    
                <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 12, textAlign: 'center', top:7}}>Mis Préstamos</Text>
            </TouchableOpacity>            

    
      <View
        style={{backgroundColor: '#D9D9D9', opacity: 0.4, width:330, height: 50, padding: 10, borderRadius: 30, top: -30, alignItems:'center'}}>
          <Pressable onPress={() => navigation.navigate('Index_Home')}>
            <Ionicons name="home" size={20} color="white" left={-91} >
            </Ionicons>
            <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 13, left:-100}}>Home</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Login_Personal')}>
            <Ionicons name="log-out" size={25} color="white" right={-108} top={-42} >
            </Ionicons>
            <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 13, right:-102, top: -45}}>Salir</Text>
          </Pressable>
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
    
    responsiveBox: {
      width: '80%',
      height: '50%',
  
    }, 
  
  
  });
export default Menu_Personal;