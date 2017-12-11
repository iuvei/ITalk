//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation'
import { Login, Registered } from './components'

const StackView = StackNavigator({
    Home: { screen: Login },
    Registered: { screen: Registered }
})



class Index extends Component {
    render() {
        return (
            <StackView />
        );
    }
}



//make this component available to the app
export default Index;
