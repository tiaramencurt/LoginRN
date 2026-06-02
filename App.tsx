import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, StatusBar } from 'react-native';
import { styles } from './App.styles';
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

      {/* Título se pasa como Prop */}
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

