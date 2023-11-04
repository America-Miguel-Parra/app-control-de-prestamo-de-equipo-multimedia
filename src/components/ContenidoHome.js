import React from 'react';
import { Image } from 'react-native';


const ContenidoHome = () => {
    // Cargamos la imagen
    const imagePath = require('./assets/logo_vertical-sinfondo.png');
  
    return (
      <Image source={imagePath} />
    );
  };
  
  export default ContenidoHome;