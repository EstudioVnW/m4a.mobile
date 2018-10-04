import React, {Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';

class Logo extends Component {
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
    //flex: 1,
    marginTop: 23,
    width: '100%',
    height: '20%',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: "#FFF",
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 200,
  },
  imagem:{
    resizeMode:'contain',
    width: '40%',
    height: '50%',
  },
});

export default Logo;