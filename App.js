import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';


import RegisterNameScreen from './source/screens/registerNameScreen'

export default class App extends React.Component {
  render() {
    return (
      <RegisterNameScreen />
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
