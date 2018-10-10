import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import Button from '../components/button';
import Logo from '../components/logo';
import Texts from '../components/texts';



class SDGDetailScreen extends React.Component {

  constructor(props){
    super(props);
    this.state={
      input:false
    }
  }
  render() {
    return (
        <View style={styles.container}>  
          <View style={{width:'100%', backgroundColor:'red'}}>
            <View style={{flexDirection:'row', height:350}}>
                <Texts text={100} marginLeft={20} color='#FFFFFF' value='1'/>
                <Texts width={180} text={40} marginTop={15} marginLeft={20} color='#FFFFFF' value='NO POVERTY'/>
            </View>
          </View>
          <View style={{ width: 60, height: 60, marginRight:30,marginTop:-30, alignSelf:'flex-end', borderRadius:50, alignItems:"center",justifyContent:'center', backgroundColor:'#F1921E'}}>
              <Image style={{width:50}} source={require('../assets/X.png')}/>
          </View>
          <View>
              <Texts width='80%' alignItems='flex-start' text={16} marginTop={5} value="Eradicating poverty is not a task of charity, it is an act of justice and the key to unlocking an enormous human potential. Still, nearly half of the world’s population lives in poverty, and lack of food and clean water is killing thousands every single day of the year. Together, we can feed the hungry, wipe out disease and give everyone in the world a chance to prosper and live a productive and rich life." />
          </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width:'100%',
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'column',
    
  },
  
});
 
export default SDGDetailScreen;