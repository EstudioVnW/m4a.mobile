import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import Imagem from '../components/imagem';
import Texts from '../components/texts';
import Button from '../components/button';

class UsuarioScreen extends Component {

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
          <Texts text={30} value="I am a ..."/>
          <Button value="Volunteer"/>
          <Button value="Organization"/>
          <Texts text={14.5} value="By clicking Join now, you agree to the M4A User Agreement, Privacy Policy, and Cookie Policy."/>
          {/* <Button title="Log in" onPress={() => this.props.navigation.navigate('Ong') } /> */}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,  
    width:'100%',
    backgroundColor: '#FF7700',
    alignItems: 'center',
    flexDirection: 'column',
  },
  
});
 
export default UsuarioScreen;