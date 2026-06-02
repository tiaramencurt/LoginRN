import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',       // Centra el logo horizontalmente
    justifyContent: 'center',   // Centra el logo verticalmente
    marginVertical: 40,         // Le da un espacio arriba y abajo para que respire
  },
  image: {
    width: 220,                 // Ancho de la imagen del logo
    height: 90,                 // Alto de la imagen del logo
    resizeMode: 'contain',      // Hace que la imagen se adapte sin deformarse
  },
});