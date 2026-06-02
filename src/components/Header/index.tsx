import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Header.styles';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Login App (Berman, Trutner)</Text>
    </View>
  );
}