import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

import Logo from '../components/logo'
import Input from '../components/input'
import Title from '../components/title'

class PasswordScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo width='15%'/>
        <Title text="My password is"/>
        <Input placeholder="Create Password"/>
        <Input placeholder="Confirm Password"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 119, 0, 0.4)",
    alignItems: 'center'
  }
});

export default PasswordScreen;