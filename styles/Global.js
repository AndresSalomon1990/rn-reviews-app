import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  titleText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: '#333'
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginVertical: 5
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5
  }
});