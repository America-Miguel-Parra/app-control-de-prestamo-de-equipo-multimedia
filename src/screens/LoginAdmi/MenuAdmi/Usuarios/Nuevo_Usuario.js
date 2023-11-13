import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {  useFonts, Montserrat_700Bold, Montserrat_600SemiBold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { ScrollView } from 'react-native-gesture-handler';
import LogosInstitucion from '../../../../../LogosInstitucion';
import TabNavigation from '../../../../navigation/TabNavigation';


const Nuevo_Usuario = ({navigation}) =>{

    const [state, setState] = useState({
        Nombre: '',
        ApellidoPaterno: '',
        ApellidoMaterno: '',
        NumeroMatricula: '',
        Area: '',
        Usuario: '',
        ClaveDeAcceso: ''
    });

    const handleChangeText = (Nombre, value) => {
        setState({...state, [Nombre]: value})
    }

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
      <LogosInstitucion/>
      
        <Text style={{top: 10, marginBottom: 30, color: '#A9A7AA'}}> ────────────────────</Text>    
        
        <Text style={{ color: '#1B396A', fontFamily: 'Montserrat_700Bold', fontSize: 15, top: -2, marginBottom: 140, maxWidth: 200, textAlign: "center" }}>Registro</Text>
        
            <View style={styles.login}>
                    <View style={styles.headerlogin}>
                        <Text style={{ color: '#FFFFFF', fontFamily: 'Montserrat_600SemiBold', fontSize: 14, padding: 12, textAlign: "center" }}>Nuevo Usuario</Text>
                    </View>
                <ScrollView>
                    <TextInput 
                    placeholder='Nombre'
                    onChangeText={(value) => handleChangeText('Nombre', value)}
                    style={styles.placeholderusuario}
                    />

                    <TextInput 
                    placeholder='Apellido Paterno'
                    onChangeText={(value) => handleChangeText('ApellidoPaterno', value)}
                    style={styles.placeholderApellidoP}
                    />

                    <TextInput 
                    placeholder='Apellido Materno'
                    onChangeText={(value) => handleChangeText('ApellidoMaterno', value)}
                    style={styles.placeholderApellidoM}
                    />

                    <TextInput 
                    placeholder='Número de Matrícula'
                    onChangeText={(value) => handleChangeText('NumeroMatricula', value)}
                    style={styles.placeholderMatricula}
                    />

                    <TextInput 
                    placeholder='Área'
                    onChangeText={(value) => handleChangeText('Area', value)}
                    style={styles.placeholderArea}
                    />

                    <TextInput 
                    placeholder='Usuario'
                    onChangeText={(value) => handleChangeText('Usuario', value)}
                    style={styles.placeholderUsuario}
                    />

                    <TextInput 
                    placeholder='Clave de acceso'
                    onChangeText={(value) => handleChangeText('ClaveDeAcceso', value)}
                    style={styles.placeholderClaveDeAcceso}
                    />
        
                    <TouchableOpacity style={{backgroundColor: '#1B396A', width:100, height: 50, padding: 5, borderRadius: 30, marginTop: 65, marginLeft: 70}}
                    onPress={() => console.log(state)}> 
                        <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 14, textAlign:'center', top:10}}>Guardar</Text>
                    </TouchableOpacity>

                    <View style={{ height: 30 }} />

                </ScrollView>
            </View>

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

    login: {
        width: 250,
        height: 400,
        backgroundColor: 'white',
        borderRadius: 18,
        top: -100,
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

    placeholderApellidoP: {
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
    
    placeholderApellidoM: {
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

    placeholderMatricula: {
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

    placeholderArea: {
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

    placeholderUsuario: {
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

    placeholderClaveDeAcceso: {
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

  export default Nuevo_Usuario;