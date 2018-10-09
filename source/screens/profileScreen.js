import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button, TextInput, CheckBox, Picker } from 'react-native';
//import CheckBox from 'react-native-checkbox';

export default class Picker2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      servico:0,
      servicos:[
        {nome:'Alinhamento', valor:30},
        {nome:'Balanceamento', valor:20},
        {nome:'Rodízio de Pneus', valor:50},
        {nome:'Dar uma voltinha', valor:10}
      ]
    };
  }

class ProfileScreen extends Component {

  render() {
    
    // return (
    //   <View style={styles.container}>
    //     <View style={styles.fieldName}>
    //       <TouchableOpacity>
    //         <Image source={require('../assets/seta.jpg')} style={styles.back} />
    //       </TouchableOpacity>
    //       <Text style={styles.name}> Hélio Silva </Text>
    //     </View>
    //     <View style={styles.photo}>
    //       <Image source={require('../assets/perfil.png')} style={styles.photoImage} />
    //     </View>
    //     <View style={styles.button}>
    //       <TouchableOpacity style = {[styles.buttonArea, {borderRightWidth: 1}]} onPress={this.nextPage}>
    //         <View style={styles.buttonAreaTitle}>
    //           <Text style={[styles.buttonTitle, {color: this.props.color, textDecorationLine: this.props.line}]}>Edit profire </Text>
    //         </View>
    //       </TouchableOpacity>
    //       <TouchableOpacity style = {[styles.buttonArea, {borderLeftWidth: 1}]} onPress={this.nextPage}>
    //         <View style={styles.buttonAreaTitle}>
    //           <Text style={[styles.buttonTitle, {color: this.props.color, textDecorationLine: this.props.line}]}>Create action </Text>
    //         </View>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // );

    et servicosItems = this.state.servicos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    });


    return (
      
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.fieldName}>
          <TouchableOpacity>
            <Image source={require('../assets/seta.jpg')} style={styles.back} />
          </TouchableOpacity>
            <Text style={styles.name}> Edit profile </Text>
            <Text style={styles.profileDone}>Done</Text>
        </View>
        <View style={styles.wrapperPhoto}>
            <Image source={require('../assets/cicero.jpeg')} style={styles.photoProfile} />
            <Text style={styles.photoChange}> Change photo </Text>
        </View>
        <View style={styles.info}>
          <View style={styles.infoProfile}>
            <Text style={styles.infoPersonal}> Email </Text>
            <Text style={styles.infoPersonal}> Password </Text>
            <Text style={styles.infoPersonal}> Name </Text>
            <Text style={styles.infoPersonal}> Birthday </Text>
            <Text style={styles.infoPersonal}> Causes </Text>
          </View>
          <View style={styles.dateUser}>
            <Text style={styles.infoUser}> heliosilva@gmail.com  </Text>
            <Text style={styles.infoUser}> Reset  </Text>
            <Text style={styles.infoUser}> Hélio Silva </Text>
            <Text style={styles.infoUser}> 09/26/1982 </Text>
          
          <CheckBox style={styles.checkCauses}
            label='People'
            checked={false}
            onChange={(checked) => alert('I am checked', checked)}
          />
          <CheckBox style={styles.checkCauses}
            label='Environment'
            checked={false}
            onChange={(checked) => alert('I am checked', checked)}
          />
          <CheckBox style={styles.checkCauses}
            label='Animals'
            checked={false}
            onChange={(checked) => alert('I am checked', checked)}
          />
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.infoExtra}>
            <Text style={styles.infoPersonal}> Extra info </Text>
            <Text style={styles.infoPersonal}> Select the SDGs you would like to help or advocate for. </Text>
            <Text style={styles.infoRelevant}> Swipe and click as many are relevant. </Text>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.infoExtra}>
            <Text style={styles.infoPersonal}> Skills </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder="Click and choose from the list"
              placeholderTextColor='rgba (110, 206, 255, 1)' 
              type="checkbox" 
            />   
          </View>
            <View style={styles.body}>
              <Text style={styles.logo}>Autopeças José</Text>
              <Picker selectedValue={this.state.servico} onValueChange={(itemValue, itemIndex) => this.setState({servico:itemValue})}>
                {servicosItems}
              </Picker>
              <Text style={styles.texto}>R$ {this.state.servicos[this.state.servico].valor.toFixed(2)}</Text>
            </View>
        </View>
      </View>
      </ScrollView>
    )
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
  },
  profileDone:{
    marginLeft: 70,
    fontSize: 17,
  },
  wrapperPhoto: {
    backgroundColor:'#0081c3', 
    height: '40%', 
    justifyContent:'center',
    alignItems:'center',
  },
  photoProfile:{
    width:100, 
    height:100, 
    borderRadius: 50
  },
  photoChange:{
    margin: 3,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  info:{
    flexDirection: 'row',
  },
  infoProfile:{
    width:'40%',
    justifyContent:'flex-start',
    alignItems:'flex-start',
  },
  dateUser:{
    width:'60%',
    justifyContent:'flex-start',
    alignItems:'flex-start',
  },
  infoPersonal:{
    marginLeft: 33,
    padding: 13,
    fontSize: 15,
    fontWeight: 'bold',
  },
  infoUser:{
    padding: 13,
    fontSize: 15,
  },
  checkCauses:{
    width: 14,
    height: 14,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: '#FFF',
    borderColor: '#0081C3',
    borderWidth: 1,
    justifyContent:'center',
    alignItems:'center',
    paddingLeft: 10

  },
  infoRelevant:{
    marginLeft: 33,
    padding: 13,
    fontSize: 15,
  },
   input:{
    width: 295,
    height: 34,
    marginLeft: 40,
    backgroundColor: '#6ECEFF',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 1,
    justifyContent:'center',
    alignItems:'center',
    paddingLeft: 10

  },
  body:{
    paddingTop:20,
    backgroundColor:'#DDDDDD',
    flex:1
  },
  logo:{
    fontSize:30,
    textAlign:'center',
    marginBottom:20
  },
  texto:{
    fontSize:26,
    textAlign:'center',
    marginTop:20
  }
});
});

export default ProfileScreen;