import React, { Component } from 'react';
import {StyleSheet, View, Text, FlatList, Image, ImageBackground} from 'react-native';

//Components
import TopSwipe	from '../components/topSwipe';
import FooterSwipe from '../components/footerSwipe';
import ListOng from '../components/listOng';
import FotoMatch from '../assets/fotoMatch.jpg';

// import PhotoInfo from '../assets/icone-info.png';
// import PhotoOval from '../assets/footer-oval.png';
// import PhotoShare from '../assets/icone-share.png';
// import PhotoHeart from '../assets/icone-coracao.png';
// import PhotoXis from '../assets/icone-xis.png';

class SwipeScreen extends Component {

	constructor(props){
		super(props);
		this.state= {
			ongs: [{
				imagem: 'https://cdn-images-1.medium.com/max/1024/1*xDi2csEAWxu95IEkaNdFUQ.png',
				name: 'Vai na Web',
				action: 'Advanced digital education within favela territories.',
				details: [
					{site: 'www.vainaweb.com.br'},
					{description: 'A free advanced digital education program that prepares young slum dwellers to be major technology professionals. For young people from 16 to 29 years, passionate about technology that want to learn by doing.'},
				]
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
			<ImageBackground source={{uri:organization.imagem}} style={styles.imagem}>
			
				<Text style={styles.nameOng}>
					{organization.name}
				</Text>
				<Text style={styles.action}>
					{organization.action}
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
  	width: '100%',
  	height: '100%',
  	justifyContent: 'center',
  },
  nameOng:{
  	margin: 20,
  	//marginLeft: 33,
  	fontSize: 33,
  	//color: '#FFF',
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




// import React, { Component } from 'react';
// import {StyleSheet, View, Text, FlatList, Image, ImageBackground} from 'react-native';

// //Components
// import TopSwipe	from '../components/topSwipe';
// import FooterSwipe from '../components/footerSwipe';

// import PhotoInfo from '../assets/icone-info.png';
// import PhotoOval from '../assets/footer-oval.png';
// import PhotoShare from '../assets/icone-share.png';
// import PhotoHeart from '../assets/icone-coracao.png';
// import PhotoXis from '../assets/icone-xis.png';


// class SwipeScreen extends Component {

// 	constructor(props){
// 		super(props);
// 		this.state= {
// 			uri: require('../assets/fotoMatch.jpg'),
// 			nameOng: 'Vai na Web',
// 			description: 'Advanced digital education within favela territories.'
// 		}
// 	}

// 	// Ong: [{
// 	// 			uri: require('../assets/fotoMatch.jpg'),
// 	// 			nameOng: 'Vai na Web',
// 	// 			description: 'Advanced digital education within favela territories.'
// 	// 		}]

// 	render() {
// 		return(
// 			<View  style={styles.container}>
// 				<TopSwipe />
// 				<ImageBackground source={this.state.uri} style={styles.imagem}>
// 				<Text style={styles.nameOng}>{this.state.nameOng}</Text>
// 				<Text style={styles.description}>{this.state.description}</Text>
// 				<FooterSwipe />
// 				</ImageBackground>
// 			</View>
// 		)
// 	}
// } 
// const styles = StyleSheet.create({
//   container: {
//   	flex:1
//   },
//   imagem:{
//   	flex:1,
//   	justifyContent: 'center',
//   },
//   nameOng:{
//   	margin: 20,
//   	//marginLeft: 33,
//   	fontSize: 33,
//   	color: '#FFF',
//   	fontWeight: 'bold'
//   },
//   description:{
//   	width: '70%',
//   	lineHeight: 30,
//   	marginLeft: 20,
//   	fontSize: 19,
//   	color: '#FFF',
//   }
// });

// export default SwipeScreen;


// <Image 
//     style={styles.image}
//     source={CircuitoMais} 
// />

// <Image style={styles.photoMatch} source={require('../assets/fotoMatch.jpg')} />

////<Image source={FotoMatch} /> 