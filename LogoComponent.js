import React from 'react';
import { Image } from 'react-native';

const LogoComponent = () => {
  return (
    <Image
      source={require('./assets/LogoTecnm/logo_vertical-sinfondo.png')}
      style={{ width: 100, height: 100, marginBottom: -10 }}
    />
  );
};

export default LogoComponent;