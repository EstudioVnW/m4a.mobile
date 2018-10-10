import React from 'react';
import { StyleSheet, View, } from 'react-native';

import Button from '../components/button';
import Logo from '../components/logo';
import Texts from '../components/texts';



class EndUserscreen extends React.Component {

  constructor(props){
    super(props);
    this.state={
      input:false
    }
  }
  render() {
    return (
        <View style={styles.container}>  
          <View style={{height:180}}>
            <Logo width={360} height={10}/>
          </View>
          <Texts width='76%' alignItems='flex-start' text={30} color='#FFFFFF' value="Your account was created!" />
          <Texts width='76%' text={20} color='#FFFFFF' value='Click on the link sent to your email to activate your account.'/>
          <Texts marginTop={145} text={18} align='center' color='#FFFFFF' value="Visit your profile to add more info."/>
          <Button marginTop={20} color='#0081C3' value='Ok' backgroundColor='#FFF' width='82%'/>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width:'100%',
    backgroundColor: '#619F42',
    alignItems: 'center',
    flexDirection: 'column',
    
  },
  
});
 
export default EndUserscreen;