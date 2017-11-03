/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';
import { Button, List } from 'antd-mobile';
import RootNavigator from './src/root.js'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <RootNavigator/>
    );
  }
}

