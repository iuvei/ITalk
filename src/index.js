//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator, } from 'react-navigation'

import loginByUserName from './views/loginView/loginByUserName'

const StackView = StackNavigator({
    Home: { screen: loginByUserName }
})

class Index extends Component {
    render() {
        return (
            <StackView/>
        );
    }
}
export default Index;
