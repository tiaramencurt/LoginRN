import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './LoginForm.styles';

interface LoginFormProps {
  onLoginResult: (type: 'success' | 'error', msg: string) => void;
}

export default function LoginForm({ onLoginResult }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const CORRECT_USER = 'admin';
    const CORRECT_PASS = '1234';

    if (username === CORRECT_USER && password === CORRECT_PASS) {
      onLoginResult('success', '¡Bienvenido! Login correcto.');
    } else {
      onLoginResult('error', 'Usuario o contraseña incorrectos, vuelva a intentar');
    }
  };

  return (
    <View style={styles.container}>
      {/* Input de Usuario con el placeholder de ejemplo de la imagen */}
      <TextInput
        style={styles.input}
        placeholderTextColor="#555"
        placeholder='Usuario'
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      {/* Input de Contraseña */}
      <TextInput
        style={styles.input}
        placeholderTextColor="#555"
        placeholder='Contraseña'
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
      />

      {/* Botón Ingresar */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      {/* Textos inferiores solicitados */}
      <View style={styles.footerLinks}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Olvidaste la clave?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style={styles.linkText}>Crear Cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}