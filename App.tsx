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
      <StatusBar backgroundColor="#6236FF" barStyle="light-content" />

      {/* DETALLE EXTREMO: Ahora el título se pasa como Prop limpia */}
      <Header title="Login App (Berman, Trutner)" />

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          
          <Logo />

          <LoginForm onLoginResult={handleLoginResult} />

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
    backgroundColor: '#6236FF', 
  },
  container: {
    flex: 1,
    backgroundColor: '#F2F2F4', 
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingBottom: 30,
  },
  messageWrapper: {
    paddingHorizontal: 30, // Mismo padding que el formulario para que quede perfectamente alineado
    marginTop: 15,
  },
});