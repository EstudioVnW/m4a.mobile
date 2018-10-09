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
      <View style={styles.container}>
        <View style={styles.containerImageOval}>
        <Image source={PhotoOval} />
        </View>
       <View  style={styles.fieldFooterGO}>
         <TouchableOpacity style={[styles.footerImage , styles.fieldSpecification]}>
          <Text style={styles.buttonGo}>Go it!</Text>
         </TouchableOpacity>
       </View>
        <View style={styles.footerContainer}>
          <View style={styles.fieldFooterButton}>
            <View style={styles.footerContainer}>
              <TouchableOpacity style={styles.footerImage}>
                <Image source={PhotoXis} />
              </TouchableOpacity>
              <Text style={styles.footerText}>skip</Text>
            </View>
            <View style={styles.footerContainer}>
              <TouchableOpacity style={[styles.footerImage, styles.fieldFooterShare]}>
                <Image source={PhotoShare} />
              </TouchableOpacity>
              <Text style={[styles.footerText,styles.footerTextShare]}>share</Text>
            </View>
            <View style={styles.footerContainer}>
              <TouchableOpacity style={styles.footerImage}>
                <Image source={PhotoHeart} />
              </TouchableOpacity>
              <Text style={styles.footerText}>volunteer</Text>
            </View>
          </View>
        </View>
      </View>
		)
	}
} 
const styles = StyleSheet.create({
  container:{
    position: 'absolute',
    bottom: 0,
    width:'100%',
  },
  containerImageOval:{
    position: 'absolute',
    bottom: 0,
  },
  footerContainer:{
    justifyContent: 'center',
    alignItems:'center',
  },
  fieldFooterButton:{
    padding: 10,
    flexDirection:'row',
  },
  footerImage:{
    margin: 10,
    width: 60,
    height: 60,
  	backgroundColor: '#0081C3',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems:'center',
  },
  fieldFooterShare:{
    width: 48,
    height: 48,
  },
  footerText:{
    color: '#0081C3',
    fontSize: 10
  },
  footerTextShare:{
    paddingTop: 12
  },
  fieldFooterGO:{
    display: '' ? '' : 'none',
    top: 80,
    alignItems: 'center',
  },
  fieldSpecification:{
    width: 80,
    height: 80
  },
  buttonGo:{
    color: '#FFF',
    fontSize: 15,
  }
});

export default FooterSwipe;




 // <View style={styles.footerContainer}>
 //        <View style={styles.fieldFooterButton}>
 //          <View style={styles.footerContainer}>
 //            <TouchableOpacity style={styles.footerImage}>
 //              <Image source={PhotoXis} />
 //            </TouchableOpacity>
 //            <Text style={styles.footerText}>skip</Text>
 //          </View>
 //          <View style={styles.footerContainer}>
 //            <TouchableOpacity style={[styles.footerImage, styles.fieldFooterShare]}>
 //              <Image source={PhotoShare} />
 //            </TouchableOpacity>
 //            <Text style={[styles.footerText,styles.footerTextShare]}>share</Text>
 //          </View>
 //          <View style={styles.footerContainer}>
 //            <TouchableOpacity style={styles.footerImage}>
 //              <Image source={PhotoHeart} />
 //            </TouchableOpacity>
 //            <Text style={styles.footerText}>volunteer</Text>
 //          </View>
 //        </View>
 //      </View>