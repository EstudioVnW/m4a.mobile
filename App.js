import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';


import RegisterScreen from './source/screens/registerScreen'
import UsuarioScreen from './source/screens/usuarioScreen'

export default class App extends React.Component {
  render() {
    return (
      <RegisterScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 119, 0, 0.4);",
    alignItems: 'center'
  },
});
