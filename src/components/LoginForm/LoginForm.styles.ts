import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#6236FF',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 15,
    color: '#000000',
  },
  button: {
    backgroundColor: '#8C66FF',
    borderRadius: 5,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#6236FF',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'normal',
    textTransform: 'uppercase',
  },
  footerLinks: {
    marginTop: 25,
    alignItems: 'center',
  },
  linkText: {
    color: '#000000',
    fontSize: 16,
    marginVertical: 10,
  },
});