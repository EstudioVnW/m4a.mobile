import React, { Component } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

//Components
import TopSwipe	from '../components/topSwipe';
import FooterSwipe from '../components/footerSwipe';
import ListOng from '../components/listOng';
import FotoMatch from '../assets/fotoMatch.jpg';

//Image
import ImageWorld	from '../assets/tutorial1.png';
import ImageWork from '../assets/tutorial2.png';


class TutorialScreen extends Component {
  
	render() {
		return(
			<View style={styles.container}>
				<TopSwipe />
				<View style={styles.containerText}>
					<Text style={styles.text}> Here is how it works: </Text>
					<Text style={[styles.text, styles.textTutorial]}> Swipe right to match and volunteer or swipe left to skip. </Text>
				</View>
				<View>
					<Image source={ImageWorld} style={styles.imageWorld}/>
					<Image source={ImageWork} style={styles.imageWork}/>
				</View>
				<FooterSwipe />
			</View>
		)
	}
} 
const styles = StyleSheet.create({
  container: {
  	flex:1,
  },
  containerText:{
  	margin: 30,
  	width: '70%',
  },
  text:{
  	fontSize: 19,
  	margin: 6
  },
  textTutorial:{
  	fontWeight: 'bold',
  	lineHeight: 30
  },
  imageWorld:{
  	right:70,
  },
  imageWork:{
  	position: 'absolute',
  	left: 60,
  	bottom: 20,
  }
});

export default TutorialScreen;