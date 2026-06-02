import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Logo from './src/components/Logo';
import LoginForm from './src/components/LoginForm';
import StatusMessage from './src/components/StatusMessage';

export default function App() {
  // Estado global de la pantalla para saber qué mensaje mostrar
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);
  const [messageText, setMessageText] = useState('');

  // Esta función recibe el resultado del intento de login desde el componente formulario
  const handleLoginResult = (type: 'success' | 'error', msg: string) => {
    setMessageType(type);
    setMessageText(msg);
  };

  return (
    // SafeAreaView evita que el contenido choque con la muesca (notch) del celular
    <SafeAreaView style={styles.screen}>
      {/* KeyboardAvoidingView evita que el teclado del celu tape los inputs al escribir */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.container}
      >
        {/* ScrollView permite hacer scroll si la pantalla del celu es muy chica */}
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          
          {/* 1. Zona Superior: Espacio Vacío donde agregamos el Logo de Coca */}
          <Logo />

          {/* 2. Zona Central: El Formulario de Login */}
          <LoginForm onLoginResult={handleLoginResult} />

          {/* 3. Zona Inferior/Aviso: Muestra el cartel de Error o Éxito */}
          <View style={styles.messageWrapper}>
            <StatusMessage type={messageType} message={messageText} />
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// Estilos de la Pantalla Principal
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Un fondo gris claro muy sutil
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',    // Centra verticalmente el contenido del Layout
    paddingBottom: 20,
  },
  messageWrapper: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
});