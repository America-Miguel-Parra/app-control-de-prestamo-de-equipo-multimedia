import React from 'react';
import { Image } from 'react-native';

const LogoComponent = () => {
  return (
    <Image
      source={require('./assets/LogoTecnm/logo_vertical-sinfondo.png')}
      style={{ width: 100, height: 100, top: 80, marginVertical:'auto' }}
    />
  );
};

export default LogoComponent;