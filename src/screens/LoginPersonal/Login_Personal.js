import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {  useFonts, Montserrat_700Bold, Montserrat_600SemiBold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import Ionicons from '@expo/vector-icons/Ionicons';
import LogosLogin from '../../../LogosLogin';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('app_db.db');



const Login_Personal = ({ navigation }) =>{

  const [usuario, setUsuario] = useState('');
const [clavedeacceso, setClaveDeAcceso] = useState('');

const handleLogin = async () => {
  // Validar nombre de usuario y contraseña
  if (!usuario || !clavedeacceso) {
    alert('Por favor ingrese sus credenciales');
    return;
  }

  // Consultar la base de datos por el usuario
  // try {

    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM formulario WHERE usuario = ?',
        [usuario],
        (tx, res) => {
          console.log("RESULTADO:", res);
          if(res.rows.length === 0){
            alert('Credenciales incorrectas');
            return;
          }

          const usuarioEncontrado = res.rows._array[0];

          if (usuarioEncontrado.ClaveDeAcceso !== clavedeacceso) {
            alert('Credenciales incorrectas');
            return;
          }

          navigation.navigate('Menu_Personal');
        },
        (error) => {
          console.error('Error al iniciar sesión:', error);
          alert('Ocurrió un error, por favor vuelva a intentarlo.');
        }
      );
    });


  //   const results = db.transaction(tx => tx.executeSql(
  //     `SELECT * FROM formulario WHERE Usuario = ?`,
  //     [usuario]
  //   ));

  //   console.log('RESULTADOS: ', results)

  //   // Si no se encuentra el usuario
  //   if (results.rows.length === 0) {
  //     alert('Credenciales incorrectas');
  //     return;
  //   }

  //   const usuarioEncontrado = results.rows._array[0];

  //   // Comparar la contraseña (considerar usar un algoritmo de hash seguro)
  //   if (usuarioEncontrado.ClaveDeAcceso !== clavedeacceso) {
  //     alert('Credenciales incorrectas');
  //     return;
  //   }

  //   // Inicio de sesión exitoso, navegar a la pantalla correspondiente
  //   navigation.navigate('Menu_Personal');
  // } catch (error) {
  //   console.error('Error al iniciar sesión:', error);
  //   alert('Ocurrió un error, por favor vuelva a intentarlo.');
  // }
};




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

      <LogosLogin/>

    <Text style={{top: -12, marginBottom: 40, color: '#A9A7AA'}}> ────────────────────</Text>    
        
        <View style={styles.login}>
        <View style={styles.headerlogin}>
        <Text style={{ color: '#FFFFFF', fontFamily: 'Montserrat_600SemiBold', fontSize: 14, padding: 12, textAlign: "center" }}>Personal</Text>
        </View>
        <TextInput 
        placeholder='Usuario'
        value={usuario}
        onChangeText={setUsuario}
        style={styles.placeholderusuario}
        />

        <TextInput 
        placeholder='Clave de acceso'
        value={clavedeacceso}
        onChangeText={setClaveDeAcceso}
        style={styles.placeholderacceso}
        />
        
        <TouchableOpacity style={{backgroundColor: '#1B396A', width:110, height: 50, padding: 5, borderRadius: 30, marginTop: 50, marginLeft: 70}}
        onPress={handleLogin}
        > 
          <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 14, padding:10}}>Continuar</Text>
        </TouchableOpacity>
        </View>


        <View
        style={{backgroundColor: '#D9D9D9', opacity: 0.4, width:330, height: 50, padding: 10, borderRadius: 30, top: 80, alignItems:'center'}}>

          <Pressable onPress={() => navigation.navigate('Index_Home')}>
            <Ionicons name="arrow-back-circle" size={30} color="white" right={-16} top={-8} />
            <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 13, alignContent: 'flex-end', top: -12}}>Regresar</Text>
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

    login: {
        width: 250,
        height: 350,
        backgroundColor: 'white',
        borderRadius: 18,
        top: -10,
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


export default Login_Personal;  
