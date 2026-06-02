import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  box: {
    padding: 15,
    borderRadius: 8,
    marginVertical: 15,
    alignItems: 'center',
  },
  errorBox: {
    backgroundColor: '#FADBD8',
    borderColor: '#E74C3C',
    borderWidth: 1,
  },
  successBox: {
    backgroundColor: '#D4EFDF',
    borderColor: '#27AE60',
    borderWidth: 1,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorText: {
    color: '#c0392b',
  },
  successText: {
    color: '#1e8449',
  },
});