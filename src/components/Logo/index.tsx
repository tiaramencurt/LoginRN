import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './Logo.styles';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/coca-logo.png')} 
        style={styles.image} 
      />
    </View>
  );
}