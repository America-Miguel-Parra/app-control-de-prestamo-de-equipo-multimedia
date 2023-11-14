import React from 'react';
import { Image, View } from 'react-native';

const LogosInstitucion = () => {
  return (
    <View>
    <Image
      source={require('./assets/LogoTecnm/TecNM_logo_sinfondo.png')} 
      style={{ width: 100, height: 44, marginRight: 210, marginTop: 53 }}
    />

    <Image
      source={require('./assets/LogoTecnm/ittux_sinfondo.png')} 
      style={{ width: 49, height: 49, marginLeft: 260, marginTop: -48 }}
    />

</View>
  );
};

export default LogosInstitucion;