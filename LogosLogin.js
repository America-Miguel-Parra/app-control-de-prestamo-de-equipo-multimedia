import React from 'react';
import { Image } from 'react-native';

const LogosLogin = () => {
  return (
    <Image
      source={require('./assets/LogoTecnm/logo_vertical-sinfondo.png')}
      style={{ width: 100, height: 100, marginVertical:'auto', top: -44 }}
    />
  );
};

export default LogosLogin;