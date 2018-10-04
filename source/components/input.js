import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

class Input extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.text}</Text>
        <TextInput style={styles.input}
          underlineColorAndroid='transparent'
          placeholder="Type here…"
          placeholderTextColor='rgba(255, 119, 0, 0.55)' 
          type="checkbox" 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center'
  },
  title:{
    margin: 10,
    fontSize: 26,
    fontWeight: 'bold'
  },
  input:{
    width: 305,
    height: 60,
    backgroundColor: '#FFF',
    borderColor: '#FF7700',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    paddingLeft: 10

  },
  inputTitle:{
    color: 'rgba(255, 119, 0, 5.5);',
    fontSize: 20
  }
});

export default Input;