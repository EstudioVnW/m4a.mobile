 import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';


import RegisterScreen from './source/screens/registerScreen'
import UsuarioScreen from './source/screens/usuarioScreen'
import Usuario2Screen from './source/screens/usuario2Screen'
import AcaoSocialscreen from './source/screens/acaoSocialscreen'


export default class App extends React.Component {
  render() {
    return (
      // <RegisterScreen />
      <AcaoSocialscreen/>
      //<Usuario2Screen/>
      //<UsuarioScreen/>
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
