import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

class Title extends React.Component {
  render() {
    return (
      <View>
        <Text style={[styles.title,{paddingRight:this.props.paddingRight},{marginBottom:this.props.marginBottom},{marginTop:this.props.marginTop}, {fontSize:this.props.font}]}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    
  },
});

export default Title;