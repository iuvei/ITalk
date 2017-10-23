/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
} from 'react-native';
import { Button, List } from 'antd-mobile';
import Login from './components/login.jsx'
export default class App extends Component<{}> {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <Login />
    );
  }
}
