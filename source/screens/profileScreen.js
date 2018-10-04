import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import {Tacreate, createStackNavigator} from 'react-navigation'

class ProfileScreen extends Component {

  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.fieldName}>
          <TouchableOpacity>
            <Image source={require('../assets/seta.jpg')} style={styles.back} />
          </TouchableOpacity>
          <Text style={styles.name}> Hélio Silva </Text>
        </View>
        <View style={styles.photo}>
          <Image source={require('../assets/perfil.png')} style={styles.photoImage} />
        </View>
        <View style={styles.button}>
          <TouchableOpacity style = {[styles.buttonArea, {borderRightWidth: 1}]} onPress={this.nextPage}>
            <View style={styles.buttonAreaTitle}>
              <Text style={[styles.buttonTitle, {color: this.props.color, textDecorationLine: this.props.line}]}>Edit profire </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.buttonArea, {borderLeftWidth: 1}]} onPress={this.nextPage}>
            <View style={styles.buttonAreaTitle}>
              <Text style={[styles.buttonTitle, {color: this.props.color, textDecorationLine: this.props.line}]}>Create action </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  fieldName:{
    paddingTop: 14,
    height:'7%',
    flexDirection: 'row',
    borderColor: '#c6e9fb',
  },
  back:{
    marginLeft:10,
    width:20, 
    height:20
  },
  name:{
    marginLeft: 120,
    fontSize: 17,
    fontWeight: 'bold'
  },
  photo:{
    backgroundColor:'#0081c3', 
    height: '60%', 
    justifyContent:'center',
    alignItems:'center',
  },
  photoImage:{
    width:200, 
    height:200, 
    borderRadius: 100
  },
  button:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center'
  },
  buttonArea:{
    width:'40%',
    height: '50%',
    borderColor: '#c6e9fb',
    justifyContent: 'center',
    alignItems:'center'
  },
  buttonTitle:{
    textAlign:'center',
    fontSize: 15
  }
});

export default ProfileScreen;