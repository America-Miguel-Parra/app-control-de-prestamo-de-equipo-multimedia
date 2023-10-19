import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {  useFonts, Montserrat_700Bold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function App() {
  
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
        <Image
        source={require("./assets/logo_vertical-sinfondo.png")}
        style={{ width: 100, height: 100, marginBottom: 20 }}
        />
        
        <Text style={{marginBottom: 20, color: '#A9A7AA'}}> ────────────────────</Text>

        <Text style={{ color: '#1B396A', fontFamily: 'Montserrat_700Bold', fontSize: 14, marginBottom: 430, maxWidth: 200, textAlign: "center" }}>Control de Préstamo de Equipos Multimedia</Text>

        <TouchableOpacity style={{backgroundColor: '#1B396A', width:200, height: 50, padding: 10, borderRadius: 30, position:"absolute", alignItems:'center'}}> 
          
          <Ionicons name="person" size={22} color="white">
          <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 14}}>   Administrador</Text>
          </Ionicons>

      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#1B396A', width:200, height: 50, padding: 10, borderRadius: 30, top:-200, alignItems:'center'}}> 
          
          <Ionicons name="people" size={24} color="white">
          <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 14}}>   Personal</Text>
          </Ionicons>

      </TouchableOpacity>
      
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
    backgroundColor: 'blue',
  }, 

});

