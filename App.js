 import React from 'react';
import { StyleSheet,  } from 'react-native';


import RegisterScreen from './source/screens/registerScreen'
import UsuarioScreen from './source/screens/usuarioScreen'
import Usuario2Screen from './source/screens/usuario2Screen'
import AcaoSocialscreen from './source/screens/acaoSocialscreen'
import EndUserscreen from './source/screens/endUserScreen'
import SDGDetailScreen from './source/screens/SDG-DetailScreen'

export default class App extends React.Component {
  render() {
    return (
      //<RegisterScreen />
      //<AcaoSocialscreen/>
      //<Usuario2Screen/>
      //<UsuarioScreen/>
      //<EndUserscreen/>
      <SDGDetailScreen />
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
