import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, StatusBar } from 'react-native';
import Header from './src/components/Header';
import Logo from './src/components/Logo';
import LoginForm from './src/components/LoginForm';
import StatusMessage from './src/components/StatusMessage';

export default function App() {
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);
  const [messageText, setMessageText] = useState('');

  const handleLoginResult = (type: 'success' | 'error', msg: string) => {
    setMessageType(type);
    setMessageText(msg);
  };

  return (
    <SafeAreaView style={styles.screen}>
      {/* Barra de estado del sistema combinado con el violeta */}
      <StatusBar backgroundColor="#6236FF" barStyle="light-content" />

      {/* 1. COMPONENTE HEADER TOTALMENTE AISLADO */}
      <Header />

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          
          {/* 2. Componente Logo de Coca */}
          <Logo />

          {/* 3. Componente Formulario de Login */}
          <LoginForm onLoginResult={handleLoginResult} />

          {/* 4. Componente de Mensajes de Éxito o Error */}
          <View style={styles.messageWrapper}>
            <StatusMessage type={messageType} message={messageText} />
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#6236FF', // Fondo del notch del cel
  },
  container: {
    flex: 1,
    backgroundColor: '#F2F2F4', // Gris claro de la imagen
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingBottom: 30,
  },
  messageWrapper: {
    paddingHorizontal: 30,
    marginTop: 15,
  },
});