import React, { Component } from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';
				
import FotoMatch from '../assets/fotoMatch.jpg';

class TopSwipe extends Component {

	constructor(props){
		super(props);
		this.state = {
		}
	}

	render() {
		return(
			<View style={styles.imagens}>
				<Image source={require('../assets/iconePerfil.png')} />
				<Image source={require('../assets/Logotipo-Match4Action.png')} style={styles.imageM4A}/>
				<Image source={require('../assets/icone-chat.png')} />				
			</View>
		)
	}
} 
const styles = StyleSheet.create({
  imagens:{
    height:  '5%',
    width: '100%', 
    marginTop: 20,
    padding: 30,
  	flexDirection: 'row',
  	justifyContent: 'space-around',
  	alignItems: 'center'
  },
  imageM4A:{
  	width: '100%',
  	height: 30,
  	resizeMode: 'contain'
  }
});

export default TopSwipe;