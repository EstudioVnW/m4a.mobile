import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

class Title extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title:{
    margin: 50,
    fontSize: 30,
    fontWeight: 'bold'
  },
});

export default Title;