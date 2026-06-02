import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 30, // Un poco más de margen lateral como la imagen
    marginTop: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#6236FF',     // Violeta de los bordes según image_4b6b7f.png
    borderRadius: 5,            // Bordes un poco menos redondeados
    paddingHorizontal: 15,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 15,
    color: '#000000',
  },
  button: {
    backgroundColor: '#8C66FF', // Violeta un poco más claro para el botón
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
    fontWeight: 'normal',       // En la imagen no se ve una negrita fuerte
    textTransform: 'uppercase', // Fuerza el texto a MAYÚSCULAS ("INGRESAR")
  },
  footerLinks: {
    marginTop: 25,
    alignItems: 'center',       // Centra los textos inferiores
  },
  linkText: {
    color: '#000000',
    fontSize: 16,
    marginVertical: 10,         // Separación entre ambos textos
  },
});