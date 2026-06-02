import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './LoginForm.styles';

// Tipamos las funciones que le vamos a pasar desde la pantalla principal (App.tsx)
interface LoginFormProps {
  onLoginResult: (type: 'success' | 'error', msg: string) => void;
}

export default function LoginForm({ onLoginResult }: LoginFormProps) {
  // Estados locales para guardar lo que el usuario va escribiendo
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Función que se ejecuta al apretar "Ingresar"
  const handleLogin = () => {
    // Datos hardcodeados solicitados por la consigna
    const CORRECT_USER = 'admin';
    const CORRECT_PASS = '1234';

    if (username === CORRECT_USER && password === CORRECT_PASS) {
      // Si coincide, mandamos el aviso de éxito
      onLoginResult('success', '¡Bienvenido! Login correcto.');
    } else {
      // Si falla, mandamos el string exacto que pidió el TP
      onLoginResult('error', 'Usuario o contraseña incorrectos, vuelva a intentar');
    }
  };

  return (
    <View style={styles.container}>
      {/* Campo de Usuario */}
      <Text style={styles.label}>Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresá tu usuario"
        placeholderTextColor="#999"
        value={username}
        onChangeText={setUsername} // Actualiza el estado con cada letra
        autoCapitalize="none"       // Evita que ponga la primera en mayúscula de prepo
      />

      {/* Campo de Contraseña */}
      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresá tu contraseña"
        placeholderTextColor="#999"
        secureTextEntry={true}     // Oculta los caracteres con puntitos
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
      />

      {/* Botón de Ingreso usando TouchableOpacity para el feedback visual */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}