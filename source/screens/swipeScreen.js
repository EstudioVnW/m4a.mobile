import React, { Component } from 'react';
import {StyleSheet, View, Text, FlatList, Image, ImageBackground} from 'react-native';

//Components
import TopSwipe	from '../components/topSwipe';
import FooterSwipe from '../components/footerSwipe';

import PhotoInfo from '../assets/icone-info.png';
import PhotoOval from '../assets/footer-oval.png';
import PhotoShare from '../assets/icone-share.png';
import PhotoHeart from '../assets/icone-coracao.png';
import PhotoXis from '../assets/icone-xis.png';


class SwipeScreen extends Component {

	constructor(props){
		super(props);
		this.state= {
			uri: require('../assets/fotoMatch.jpg'),
			nameOng: 'Vai na Web',
			description: 'Advanced digital education within favela territories.'
		}
	}

	render() {
		return(
			<View  style={styles.container}>
				<TopSwipe />
				<ImageBackground source={this.state.uri} style={styles.imagem}>
				<Text style={styles.nameOng}>{this.state.nameOng}</Text>
				<Text style={styles.description}>{this.state.description}</Text>
				<FooterSwipe />
				</ImageBackground>
			</View>
		)
	}
} 
const styles = StyleSheet.create({
  container: {
  	flex:1
  },
  imagem:{
  	flex:1,
  	justifyContent: 'center',
  },
  nameOng:{
  	margin: 20,
  	//marginLeft: 33,
  	fontSize: 33,
  	color: '#FFF',
  	fontWeight: 'bold'
  },
  description:{
  	width: '70%',
  	lineHeight: 30,
  	marginLeft: 20,
  	fontSize: 19,
  	color: '#FFF',
  }
});

export default SwipeScreen;


// <Image 
//     style={styles.image}
//     source={CircuitoMais} 
// />

//<Image style={styles.photoMatch} source={require('../assets/fotoMatch.jpg')} />