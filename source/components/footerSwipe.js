import React, { Component } from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
		
import PhotoMatch from '../assets/fotoMatch.jpg';
import PhotoInfo from '../assets/icone-info.png';
import PhotoOval from '../assets/footer-oval.png';
import PhotoShare from '../assets/icone-share.png';
import PhotoHeart from '../assets/icone-coracao.png';
import PhotoXis from '../assets/icone-xis.png';



class FooterSwipe extends Component {

	constructor(props){
		super(props);
		this.state = {
			
		}
	}

	render() {
		return(
      <View  style={styles.footerrr}>
       <Image source={PhotoOval} />
      <View style={styles.footer}>
       <TouchableOpacity style={styles.fieldFooter}>
          <Image style={styles.footerPhoto} source={PhotoXis} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.fieldFooter, styles.fieldFooterShare]}>
          <Image style={styles.footerPhoto} source={PhotoShare} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.fieldFooter}>
          <Image style={styles.footerPhoto} source={PhotoHeart} />
        </TouchableOpacity>
      </View>
      </View>
		)
	}
} 
const styles = StyleSheet.create({
  footerrr:{
    position: 'absolute',
    bottom: 0,
  },
  footer:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    position: 'absolute',
    bottom: 1,
  },
  fieldFooter:{
  	flexDirection: 'row',
  	backgroundColor: '#0081C3',
  	borderRadius: 50,
  	width: 60,
  	height: 60,
  	justifyContent: 'space-around',
  	alignItems:'center',
  	margin: 10,
    marginLeft: 30
  },
  fieldFooterShare:{
    width: 48,
    height: 48,
  },
  fieldFooterText:{
    flexDirection:'row',
    justifyContent: 'space-evenly',
    alignItems:'center',
  },
  footerText:{
    color: '#0081C3'
  }
});

export default FooterSwipe;