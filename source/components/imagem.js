import React from 'react';
import { StyleSheet, View, Image  } from 'react-native';


export default class Imagem extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {  
        width:'100%',
        height: 200,
        backgroundColor: '#FFF',
        alignItems: 'center',
        borderBottomRightRadius: 200,
        borderBottomLeftRadius: 300,
      },
    logo:{
        width: '50%',
        height: 160,
        alignItems:'center',
      },

})