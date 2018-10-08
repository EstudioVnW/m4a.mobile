import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

class Title extends React.Component {
  render() {
    return (
      <View>
        <Text style={[styles.title,{color:this.props.color},{paddingTop:this.props.paddingTop},{paddingBottom:this.props.paddingBottom},{paddingRight:this.props.paddingRight},{width:this.props.width},{paddingLeft:this.props.paddingLeft},{marginLeft:this.props.marginLeft},{marginBottom:this.props.marginBottom},{marginTop:this.props.marginTop}, {fontSize:this.props.font}]}>{this.props.text}</Text>
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