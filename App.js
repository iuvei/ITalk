import React, { Component } from 'react';

import { Text,StyleSheet } from 'react-native'
import {
  TextTest1,TextTest2,TextTest3,TextTest4,
  TextInputTest1,TextInputTest2,TextInputTest3,TextInputTest4,
  MyDiary,
  AsyncStorageTest,
  ActivityIndicatorTest1,
  ProgressBarAndroidTest1,
  SwitchTest1,
  LoginTest,
  WebViewTest
} from './src/RNLearn'
export default class App extends Component {
  render() {  
    return (
      <WebViewTest />

    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2c3e50',
  },
});