import React, {Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';

class Logo extends Component {
  render() {
    return (
      <View style={[styles.container,{width:this.props.width} ]}>
        <View style={{alignItems: 'center', justifyContent:'center'}}>
          <Image source={require('../assets/logo.png')} style={styles.imagem}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 23,
    backgroundColor: "#FFF",
    width: '100%',
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 300,
  },
  littleBar:{
    height: '4%',
    backgroundColor: 'rgba(97, 159, 66, 0.49);',
    width: '100%'
  },
  littleBarLoading:{
    alignItems: 'flex-start',
    backgroundColor: '#619F42',
    height: '4%',
    marginTop: -10,
  },
  AreaImage:{
    width: '100%',
  },
  imagem:{
    width:'20%',
    height: 70,
  },
});

export default Logo;