import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

class InputScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Enter your email" placeholderTextColor='rgba(255, 119, 0, 1);' underlineColorAndroid='transparent'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  input:{
    width: 305,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',

  },
  inputTitle:{
    color: 'rgba(255, 119, 0, 5.5);',
    fontSize: 20
  }
});

export default InputScreen;