import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

import Logo from '../components/logo'
import Input from '../components/input'

class RegisterNameScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Text style={styles.title}>My e-mail is</Text>
        <Input />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 119, 0, 0.4);",
    alignItems: 'center',
    //justifyContent: 'space-around'
  },
  title:{
    margin: 100,
    fontSize: 30,
    fontWeight: 'bold'
  },
});

export default RegisterNameScreen;