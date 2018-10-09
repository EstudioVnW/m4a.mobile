import React from 'react';
import { StyleSheet, View, Text  } from 'react-native';

export default class Button extends React.Component{
    render(){
        return(
            <View style={[styles.container,{backgroundColor:this.props.backgroundColor}, {marginLeft:this.props.marginLeft},{marginTop:this.props.marginTop},{width:this.props.width} ]}>
                <Text style={[styles.Button,{color:this.props.color}]}>{this.props.value}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {  
        width:'82%',
        height: 60,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 10,
        fontSize: 30,
        marginTop: 15,
    },
    Button:{
        color:'#0081C3',
        fontSize:20,
    },
})