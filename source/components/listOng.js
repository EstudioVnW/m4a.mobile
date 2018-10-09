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


class ListOng extends Component {

	constructor(props){
		super(props);
		this.state= {
			ongs: [{
				uri: require('../assets/fotoMatch.jpg'),
				name: 'Vai na Web',
				action: 'Advanced digital education within favela territories.',
				details: [{
					site: 'www.vainaweb.com.br',
					description: 'A free advanced digital education program that prepares young slum dwellers to be major technology professionals. For young people from 16 to 29 years, passionate about technology that want to learn by doing.',
				}]
			}]
		}
	}

	renderOngs = () => {
    return this.state.ongs.map((organization, index) => {
      return (
        <View
          key={index}
          style={styles.ongContainer}
        >
			<ImageBackground source={this.state.uri} style={styles.imagem}>
				<Text style={styles.nameOng}>
					{ong.name}
				</Text>
				<Text style={styles.action}>
					{ong.action}
				</Text>
			</ImageBackground>     
        </View>
      );
    });
  }
  
	render() {
		return(
			<View  style={styles.container}>
				<TopSwipe />
				{ this.renderOngs() }
				<FooterSwipe />
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
  action:{
  	width: '70%',
  	lineHeight: 30,
  	marginLeft: 20,
  	fontSize: 19,
  	color: '#FFF',
  }
});

export default ListOng;