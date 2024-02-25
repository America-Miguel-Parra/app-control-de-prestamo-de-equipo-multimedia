import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {  useFonts, Montserrat_700Bold, Montserrat_600SemiBold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import LogosInstitucion from '../../../../../LogosInstitucion';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('app_db.db');


const Lista_Equipos = ({navigation}) =>{

  const [equipos, setEquipos] = useState([]);
  const [numeroSerieEliminar, setNumeroSerieEliminar] = useState(''); // Estado para almacenar el número de serie a eliminar

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Equipos',
        [],
        (tx, res) => {
          const equipos = [];
          for (let i = 0; i < res.rows.length; i++) {
            equipos.push(res.rows._array[i]);
          }
          setEquipos(equipos);
        },
        (error) => {
          console.error('Error al cargar los equipos:', error);
        }
      );
    });
  }, []);

if (!equipos) {
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
        const numeroSerie = numeroSerieEliminar.trim(); // Trim leading/trailing spaces
      
        if (!numeroSerie) {
          Alert.alert('Error', 'Ingrese el número de serie del equipo a eliminar.');
          return;
        }
      
        const equipo = equipos.find(equipo => equipo.NumeroSerie === numeroSerie);
      
        if (!equipo) {
          Alert.alert('Error', 'No se encontró ningún equipo con ese número de serie.');
          return;
        }
      
        Alert.alert(
          'Confirmación',
          `¿Está seguro de eliminar el equipo con número de serie "${numeroSerie}"?`,
          [
            { text: 'Cancelar', onPress: () => {}, style: 'cancel' },
            {
              text: 'Eliminar',
              onPress: () => {
                db.transaction(tx => {
                  tx.executeSql(
                    'DELETE FROM Equipos WHERE NumeroSerie = ?',
                    [numeroSerie],
                    (tx, res) => {
                      console.log('Equipo eliminado:', numeroSerie);
                      // Actualiza la lista de equipos
                      setEquipos(equipos.filter(equipo => equipo.NumeroSerie !== numeroSerie));
                      setNumeroSerieEliminar(''); // Limpia el campo de texto después de la eliminación exitosa
                    },
                    (error) => {
                      console.error('Error al eliminar el equipo:', error);
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
      
        <Text style={{top: 10, marginBottom: 230, color: '#A9A7AA'}}> ────────────────────</Text>    
        
        
            <View style={styles.login}>
                    <View style={styles.headerlogin}>
                        <Text style={{ color: '#FFFFFF', fontFamily: 'Montserrat_600SemiBold', fontSize: 14, padding: 12, textAlign: "center" }}>Lista de Equipos</Text>
                    </View>
                <ScrollView>
                    
                        {equipos.map((equipos) => (
                          <View key={equipos.id} style={{ borderBottomWidth: 1.5, borderColor: '#dcdcdc', marginTop: 10, marginLeft: 15, marginRight: 15  }}>
                            <Text>Tipo de Equipo: {equipos.TipoEquipo}</Text>
                            <Text>Marca: {equipos.Marca}</Text>
                            <Text>Modelo: {equipos.Modelo}</Text>
                            <Text>Número de Serie: {equipos.NumeroSerie}</Text>

                          </View>
                        ))}

                    <View style={{ height: 30 }} />

                    <TextInput
                      style={{ borderWidth: 1, borderColor: '#dcdcdc', textAlign:'center', padding: 10, width: 200, marginLeft: 25 }}
                      placeholder="Número de serie del equipo a eliminar"
                      onChangeText={setNumeroSerieEliminar}
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

          <Pressable onPress={() => navigation.navigate('OpcEquipos')}>
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
        top: -150,
    },

    headerlogin: {
        width: 250,
        height: 45,
        backgroundColor: '#1B396A',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        
    },

    placeholderNumEquipo: {
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

    placeholderEquipo: {
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

    placeholderMarca: {
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
    
    placeholderModelo: {
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

    placeholderNumSerie: {
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

  export default Lista_Equipos;