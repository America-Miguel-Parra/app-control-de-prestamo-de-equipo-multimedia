import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {  useFonts, Montserrat_700Bold, Montserrat_600SemiBold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import LogosInstitucion from '../../../../../LogosInstitucion';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('app_db.db');



const Lista_Prestamos = ({navigation}) =>{

  const [prestamos, setPrestamos] = useState([]);
  const [fechaPrestamoEliminar, setFechaPrestamoEliminar] = useState(''); // Estado para almacenar el número de serie a eliminar


  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM NuevoPrestamo',
        [],
        (tx, res) => {
          const prestamos = [];
          for (let i = 0; i < res.rows.length; i++) {
            prestamos.push(res.rows._array[i]);
          }
          setPrestamos(prestamos);
        },
        (error) => {
          console.error('Error al cargar prestamos:', error);
        }
      );
    });
  }, []);

  

if (!prestamos) {
  return <div>Loading...</div>;
}




    let [fontsLoaded] = useFonts({
        Montserrat_700Bold,
        Montserrat_600SemiBold,
        Montserrat_400Regular,
      });
    
      if (!fontsLoaded) {
        return null;
      }


      /////////////////////////////////////////////////////////////////////////////////////////////////////

      const handleDeleteBySerialNumber = () => {
        const fechaEliminar = fechaPrestamoEliminar.trim(); // Trim leading/trailing spaces
      
        if (!fechaEliminar) {
          Alert.alert('Error', 'Ingrese la fecha de los prestamo a eliminar.');
          return;
        }
      
        const prestamo = prestamos.find(prestamos => prestamos.Fecha === fechaEliminar);
      
        if (!prestamo) {
          Alert.alert('Error', 'No se encontraron ningunos préstamo con esa fecha.');
          return;
        }
      
        Alert.alert(
          'Confirmación',
          `¿Está seguro de eliminar los préstamos con la fecha de "${fechaEliminar}"?`,
          [
            { text: 'Cancelar', onPress: () => {}, style: 'cancel' },
            {
              text: 'Eliminar',
              onPress: () => {
                db.transaction(tx => {
                  tx.executeSql(
                    'DELETE FROM NuevoPrestamo WHERE Fecha = ?',
                    [fechaEliminar],
                    (tx, res) => {
                      console.log('Préstamos eliminados:', fechaEliminar);
                      // Actualiza la lista de equipos
                      setPrestamos(prestamos.filter(prestamos => prestamos.Fecha !== fechaEliminar));
                      setFechaPrestamoEliminar(''); // Limpia el campo de texto después de la eliminación exitosa
                    },
                    (error) => {
                      console.error('Error al eliminar los préstamos:', error);
                    }
                  );
                });
              },
              style: 'destructive',
            },
          ]
        );
      };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    return(

    <LinearGradient
        colors={['#FFFFFF', '#1B396A']}
        style={styles.container}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
    >
      <LogosInstitucion/>
      
        <Text style={{top: 10, marginBottom: 47, color: '#A9A7AA'}}> ────────────────────</Text>    
        
        <Text style={{ color: '#1B396A', fontFamily: 'Montserrat_700Bold', fontSize: 15, top: -15, marginBottom: 160, maxWidth: 200, textAlign: "center" }}>Préstamos del Día</Text>
        
            <View style={styles.login}>
                    <View style={styles.headerlogin}>
                        <Text style={{ color: '#FFFFFF', fontFamily: 'Montserrat_600SemiBold', fontSize: 14, padding: 12, textAlign: "center" }}>Historial de Préstamos</Text>
                    </View>
                <ScrollView>

                        {prestamos.map((prestamos) => (
                          <View key={prestamos.id} style={{ borderBottomWidth: 1.5, borderColor: '#dcdcdc', marginTop: 10, marginLeft: 15, marginRight: 15  }}>
                            <Text>Nombre Completo: {prestamos.NombreCompleto}</Text>
                            <Text>Área: {prestamos.Area}</Text>
                            <Text>Número de Equipo: {prestamos.NumeroEquipo}</Text>
                            <Text>Tipo de Equipo: {prestamos.TipoEquipo}</Text>
                            <Text>Carrera: {prestamos.Carrera}</Text>
                            <Text>Grupo: {prestamos.Grupo}</Text>
                            <Text>Materia: {prestamos.Materia}</Text>
                            <Text>Fecha: {prestamos.Fecha}</Text>
                            <Text>Hora: {prestamos.Hora}</Text>
                          </View>
                        ))}
                
                    <View style={{ height: 30 }} />


                    <TextInput
                      style={{ borderWidth: 1, borderColor: '#dcdcdc', textAlign:'center', padding: 10, width: 200, marginLeft: 25 }}
                      placeholder="Fecha de los préstamos a eliminar"
                      onChangeText={setFechaPrestamoEliminar}
                    />

                      <TouchableOpacity style={{backgroundColor: '#1B396A', width:100, height: 50, padding: 5, borderRadius: 30, marginTop: 25, marginLeft: 70}}
                      onPress={handleDeleteBySerialNumber}
                      >
                        <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 12, textAlign:'center', top:10}}>Eliminar</Text>
                      </TouchableOpacity>
                      

                </ScrollView>
            </View>


        <View
        style={{backgroundColor: '#D9D9D9', opacity: 0.4, width:330, height: 50, padding: 10, borderRadius: 30, top: -30, alignItems:'center'}}>
          <Pressable onPress={() => navigation.navigate('Index_Home')}>
            <Ionicons name="home" size={20} color="white" left={-91} >
            </Ionicons>
            <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 13, left:-100}}>Home</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Menu_Admi')}>
            <Ionicons name="arrow-back-circle" size={29} color="white" right={-16} top={-44} />
            <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 13, alignContent: 'flex-end', top: -48}}>Regresar</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Login_Admi')}>
            <Ionicons name="log-out" size={25} color="white" right={-108} top={-90} >
            </Ionicons>
            <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 13, right:-102, top: -92}}>Salir</Text>
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
        height: 400,
        backgroundColor: 'white',
        borderRadius: 18,
        top: -110,
    },

    headerlogin: {
        width: 250,
        height: 45,
        backgroundColor: '#1B396A',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        
    },

    placeholderUsuario1: {
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'center',
        fontSize: 14,
        width: 200,
        height: 130,
        marginTop: 35,
        marginLeft: 27,
        backgroundColor: '#EDEDED',
        borderRadius: 10,
    },

    placeholderUsuario2: {
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'center',
        fontSize: 14,
        width: 200,
        height: 130,
        marginTop: 60,
        marginLeft: 27,
        backgroundColor: '#EDEDED',
        borderRadius: 10,
    },

    placeholderUsuario3: {
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'center',
        fontSize: 14,
        width: 200,
        height: 130,
        marginTop: 60,
        marginLeft: 27,
        backgroundColor: '#EDEDED',
        borderRadius: 10,
    },
    
    placeholderUsuario4: {
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'center',
        fontSize: 14,
        width: 200,
        height: 130,
        marginTop: 60,
        marginLeft: 27,
        backgroundColor: '#EDEDED',
        borderRadius: 10,
    },

    placeholderUsuario5: {
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'center',
        fontSize: 14,
        width: 200,
        height: 130,
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

  export default Lista_Prestamos;