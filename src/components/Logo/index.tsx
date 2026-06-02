import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './Logo.styles';

export default function Logo() {
  return (
    // Usamos un View como contenedor para posicionar la imagen
    <View style={styles.container}>
      <Image 
        // Importamos la imagen local desde la carpeta de assets
        source={require('../../../assets/coca-logo.png')} 
        style={styles.image} 
      />
    </View>
  );
}