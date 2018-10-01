import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.imagem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "rgba(255, 119, 0, 0.4);",
    // alignItems: 'center'
  },
  AreaImage:{
    backgroundColor:'#FFF'
  },
  imagem:{
    width: '100%',
    height: 50 
  },
});

export default Logo;