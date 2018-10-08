import React from 'react';
import { StyleSheet, Text, View, TextInput, Image,ScrollView } from 'react-native';

import Button from '../components/button';
import Logo from '../components/logo'
import Input from '../components/input'
import Title from '../components/title'

class RegisterScreen extends React.Component {

  constructor(props){
    super(props);
    this.state={
      input:false
    }
  }
  render() {
    return (
        <View style={styles.container}>
            <Logo width='100%'/>
            <Input text="Name" />
            <Input text="Email" />
            <Input text="Password" />
            <Title paddingRight={40} marginTop={40} marginBottom={20} font={26} text='Are you 18 or older?'/>
            <Button color='#fff' backgroundColor='#FF7700' width={300} value='Next'/>    
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

export default RegisterScreen;

//https://react-native-training.github.io/react-native-elements/docs/checkbox.html#checked

//https://www.npmjs.com/package/react-native-checkbox

// https://docs.nativebase.io/Components.html#checkbox-headref



// import React from 'react';
// import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

// import Logo from '../components/logo'
// import Input from '../components/input'
// import Title from '../components/title'

// class RegisterNameScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Logo width='15%'/>
//         <Title text="My e-mail is"/>
//         <Input placeholder="Enter your email"/>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "rgba(255, 119, 0, 0.4)",
//     alignItems: 'center'
//   }
// });

// export default RegisterNameScreen;