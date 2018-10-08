import React from 'react';
import { StyleSheet, Text, View, TextInput, Image,ScrollView } from 'react-native';

import Button from '../components/button';
import Logo from '../components/logo';
import Input from '../components/input';
import Title from '../components/title';

import { Slider } from 'react-native-elements';

class AcaoSocialscreen extends React.Component {

  constructor(props){
    super(props);
    this.state={
      input:false
    }
  }
  render() {
    return (
        <View style={styles.container}>
            <ScrollView >
                  <Logo width={360} height={100}/>
                <View style={styles.containerScrollTop}>
                  <Title width='82%' paddingTop={20} paddingRight={70} font={26} text='What moves you?' />
                  <Title width='82%' paddingBottom={20} paddingRight={20} font={19} text='Choose as many as you want.' />
                  <Button width='82%' marginTop={10} value='Animals' backgroundColor='#FF7700' color='#FFF'/>
                  <Button width='82%' marginTop={10} value='People' backgroundColor='#0081C3' color='#fff' />
                  <Button width='82%' marginTop={10} value='Environment' color='#FFF' backgroundColor='#619F42' />
                </View>  
                <View style={styles.containerScrollBetween}>
                  <Title paddingLeft={15} marginTop={20} font={26} text='Location'/>
                  <Title marginLeft={55} marginTop={20} font={19} text='Enable location while using'/>
                  
                  <View style={styles.containerScrollBetweenLine}>
                    <View style={{width:40, borderTopWidth: 1, borderColor: '#FF7700'}}></View>
                    <Title style={styles.containerScrollBetweenLineTitle} font={19} text='or'/>
                    <View style={{width:210, borderTopWidth: 1, borderColor:'#FF7700'}}></View>
                  </View>
                  <Title marginLeft={55} marginTop={20} font={19} text='tell us your ZIP code:'/>
                  <Input />
                </View>  
                <View>
                  <Title marginTop={20} marginLeft={45} font={26} text='Would you allow remote volunteering?'/>
                  <Button width='82%' marginTop={20} value='Next' color='#FFF' backgroundColor='#FF7700'/>
                </View> 
            </ScrollView>
            
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 119, 0, 0.4)",
    alignItems: 'center'
  },
  containerScrollTop:{
    width:'100%',
    alignItems:'center',
  },
  containerScrollBetween:{
    width:'90%',
    marginLeft: 30,
    marginRight: 30,
    
  },
  containerScrollBetweenLine:{
    width:'90%',
    height: 15,
    marginTop: 20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  containerScrollBetweenLineTitle:{
    backgroundColor:'red',
    paddingTop: 10,
    marginLeft:50,
  }
});

export default AcaoSocialscreen;