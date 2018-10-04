import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';


import RegisterScreen from './source/screens/registerScreen';
import PasswordScreen from './source/screens/passwordScreen';
import MessageScreen from './source/screens/messageScreen';
import MatchesScreen from './source/screens/matchesScreen';

export default class App extends React.Component {
  render() {
    return (
      <MatchesScreen />
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
