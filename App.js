/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,Text
} from 'react-native';
import { Button, List } from 'antd-mobile';
import Login from './src/login/login'
export default class App extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <View><Login/></View>

    );
  }
}

// import React, {
//   Component,
// } from 'react';
// import {
//   DrawerLayoutAndroid, 
//   ProgressBarAndroid, 
//   Text 
// } from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <DrawerLayoutAndroid
//         renderNavigationView={() => <Text>React Native</Text>}>
//         <ProgressBarAndroid />
//       </DrawerLayoutAndroid>
//     );
//   }
// }