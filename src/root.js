import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './screens/login'
import Register from './screens/register'
import ForgetPassword from './screens/forget_password'
import ChatScreen from './screens/chatScreen'

const RootNavigator = StackNavigator({
  Login: {screen: Login,},
  Register: { screen: Register,},
  ForgetPassword: {screen: ForgetPassword,},
  ChatScreen:{screen:ChatScreen},
});

export default RootNavigator;