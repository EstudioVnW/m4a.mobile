import React from 'react';
import { StyleSheet, Text, View, TextInput, Image,ScrollView } from 'react-native';

import Button from '../components/button';
import Logo from '../components/logo'
import Input from '../components/input'
import Title from '../components/title'

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
            <ScrollView>
                <Logo />
                <Title text='What moves you?' font={26} />
                <Title text='Choose as many as you want.' font={19}/>
                <Button value='Animals' backgroundColor='#FF7700' color='#FFF'/>
                <Button value='People' backgroundColor='#0081C3' color='#fff' />
                <Button value='Environment' color='#FFF' backgroundColor='#619F42' width={300} value='Next'/>     
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
});

export default AcaoSocialscreen;