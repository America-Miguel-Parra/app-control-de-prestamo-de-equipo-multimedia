import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {  useFonts, Montserrat_700Bold, Montserrat_600SemiBold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import LogosInstitucion from '../../../../LogosInstitucion';


const Nuevo_Prestamo = ({navigation}) =>{

    const [state, setState] = useState({
        NombreCompleto: '',
        Area: '',
        NoProyector: '',
        Carrera: '',
        Grupo: '',
        Materia: '',
        ClaveDeAcceso: ''
    });

    const handleChangeText = (NombreCompleto, value) => {
        setState({...state, [NombreCompleto]: value})
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
      
        <Text style={{top: 10, marginBottom: 47, color: '#A9A7AA'}}> ────────────────────</Text>    
        
        <Text style={{ color: '#1B396A', fontFamily: 'Montserrat_700Bold', fontSize: 15, top: -15, marginBottom: 160, maxWidth: 200, textAlign: "center" }}>Registro</Text>
        
            <View style={styles.login}>
                    <View style={styles.headerlogin}>
                        <Text style={{ color: '#FFFFFF', fontFamily: 'Montserrat_600SemiBold', fontSize: 14, padding: 12, textAlign: "center" }}>Nuevo Préstamo</Text>
                    </View>
                <ScrollView>
                    <TextInput 
                    placeholder='Nombre Completo'
                    onChangeText={(value) => handleChangeText('NombreCompleto', value)}
                    style={styles.placeholderusuario}
                    />

                    <TextInput 
                    placeholder='Área'
                    onChangeText={(value) => handleChangeText('Area', value)}
                    style={styles.placeholderApellidoP}
                    />

                    <TextInput 
                    placeholder='No. de Proyector'
                    onChangeText={(value) => handleChangeText('NoProyector', value)}
                    style={styles.placeholderApellidoM}
                    />

                    <TextInput 
                    placeholder='Carrera'
                    onChangeText={(value) => handleChangeText('Carrera', value)}
                    style={styles.placeholderMatricula}
                    />

                    <TextInput 
                    placeholder='Grupo'
                    onChangeText={(value) => handleChangeText('Grupo', value)}
                    style={styles.placeholderArea}
                    />

                    <TextInput 
                    placeholder='Materia'
                    onChangeText={(value) => handleChangeText('Materia', value)}
                    style={styles.placeholderUsuario}
                    />
        
                    <TouchableOpacity style={{backgroundColor: '#1B396A', width:100, height: 50, padding: 5, borderRadius: 30, marginTop: 65, marginLeft: 70}}
                    onPress={() => console.log(state)}> 
                        <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 14, textAlign:'center', top:10}}>Guardar</Text>
                    </TouchableOpacity>

                    <View style={{ height: 30 }} />

                </ScrollView>
            </View>


        <View
        style={{backgroundColor: '#D9D9D9', opacity: 0.4, width:330, height: 50, padding: 10, borderRadius: 30, top: -30, alignItems:'center'}}>
          <Pressable onPress={() => navigation.navigate('Index_Home')}>
            <Ionicons name="home" size={20} color="white" left={-91} >
            </Ionicons>
            <Text style={{ color: 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: 13, left:-100}}>Home</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('OpcUsuarios')}>
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

  export default Nuevo_Prestamo;