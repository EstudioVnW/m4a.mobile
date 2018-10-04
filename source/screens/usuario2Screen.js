import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import Imagem from '../components/imagem';
import Texts from '../components/texts';
import Button from '../components/button';

class Usuario2Screen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Texts:''
    }
  }

  render() {
    
    return (
      <View style={styles.container}>
          <Imagem />
          <Texts text={25} value="Let´s create your new account" />
          <Button marginTop={89} value="Start"/>
          <Texts marginTop={80} text={14} align='center' color='#FFF1E5' value="By clicking Join now, you agree to the M4A User Agreement, Privacy Policy, and Cookie Policy."/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,  
    marginTop: 60,
    width:'100%',
    backgroundColor: '#FF7700',
    alignItems: 'center',
    flexDirection: 'column',
    
  },
  
});
 
export default Usuario2Screen;