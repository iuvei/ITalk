//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, BackHandler } from 'react-native';
import { StackNavigator, TabNavigator,DrawerNavigator } from 'react-navigation'
import LoginLeaf from './loginLeaf';
import WaitingLeaf from './waitingLeaf'
import Mine from './mine'
/*
const App = StackNavigator({
    Login: { screen: LoginLeaf },
    Wait: { screen: WaitingLeaf }
})
const Tab = TabNavigator({
    Home: { screen: App },
    Mine: { screen: Mine }
},{
    tabBarPosition:'bottom',
    tabBarOptions:{
        showIcon:true
    }
})
*/
const Drawer =DrawerNavigator({
    Login: { screen: LoginLeaf },
    Wait: { screen: WaitingLeaf },
    Mine: { screen: Mine }
})

// create a component
class Index extends Component {
    render() {
        return (
            <Drawer />
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

//make this component available to the app
export default Index;
