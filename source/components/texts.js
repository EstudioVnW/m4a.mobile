import React from 'react';
import { StyleSheet, View, Text  } from 'react-native';

export default class TextCreat extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={[styles.TextCreat,{textAlign:this.props.align}, {color:this.props.color},{fontSize:this.props.text}, {marginTop:this.props.marginTop}]}>{this.props.value}</Text>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    container: {  
        width:'82%',
        backgroundColor: '#FF7700',
        marginTop: 15,
        
    },
})