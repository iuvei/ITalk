import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './screens/login'
import Register from './screens/register'
import ForgetPassword from './screens/forget_password'

const RootNavigator = StackNavigator({
  Login: {screen: Login,},
  Register: { screen: Register,},
  ForgetPassword: {screen: ForgetPassword,},
});

export default RootNavigator;