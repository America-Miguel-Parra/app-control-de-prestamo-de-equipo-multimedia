import React from 'react';
import { Image, View } from 'react-native';

const LogosInstitucion = () => {
  return (
    <View>
    <Image
      source={require('./assets/LogoTecnm/TecNM_logo_sinfondo.png')} 
      style={{ width: 100, height: 44, marginRight: 200, marginTop: 10 }}
    />

    <Image
      source={require('./assets/LogoTecnm/ittux_sinfondo.png')} 
      style={{ width: 48, height: 48, marginLeft: 250, marginTop: -48 }}
    />

</View>
  );
};

export default LogosInstitucion;