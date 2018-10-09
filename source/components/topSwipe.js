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
			<View style={styles.container}>
				<Image source={require('../assets/iconePerfil.png')} />
				<Image source={require('../assets/Logotipo-Match4Action.png')} style={styles.imageM4A}/>
				<Image source={require('../assets/icone-chat.png')} style={styles.imageMsg}/>				
			</View>
		)
	}
} 
const styles = StyleSheet.create({
  container:{
    height: '7%',
    width: '100%', 
    marginTop: 20,
    padding: 30,
  	flexDirection: 'row',
  	justifyContent: 'space-around',
  	alignItems: 'center',
  	borderBottomWidth:1,
  	borderColor: 'rgba(0, 129, 195, 0.19);'
  },
  imageM4A:{
  	width: '100%',
  	height: 30,
  	resizeMode: 'contain'
  },
  imageMsg:{
    width: '10%',
    
    resizeMode: 'contain'
  }
});

export default TopSwipe;