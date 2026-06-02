import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './StatusMessage.styles';

// Definimos qué datos necesita recibir este componente (Props)
interface StatusMessageProps {
  type: 'success' | 'error' | null;
  message: string;
}

export default function StatusMessage({ type, message }: StatusMessageProps) {
  // Si no hay ningún tipo de mensaje (es null), no renderizamos absolutamente nada
  if (!type) return null;

  // Elegimos los estilos dinámicamente según si es éxito o error
  const isSuccess = type === 'success';
  const boxStyle = isSuccess ? styles.successBox : styles.errorBox;
  const textStyle = isSuccess ? styles.successText : styles.errorText;

  return (
    <View style={[styles.box, boxStyle]}>
      <Text style={[styles.text, textStyle]}>{message}</Text>
    </View>
  );
}