//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation'
import { Login, Registered, Contact, PersonalStatus, NewsList } from './components'

const TabView = TabNavigator({
    NewsList: { screen: NewsList },
    Contact: { screen: Contact },
    PersonalStatus: { screen: PersonalStatus }
}, {
        tabBarOptions: {
            activeTintColor: '#4BC1D2',
            inactiveTintColor: '#000',
            showIcon: true,
            showLabel: true,
            upperCaseLabel: false,
            pressColor: '#823453',
            pressOpacity: 0.8,
            style: {
                backgroundColor: '#fff',
                paddingBottom: 0,
                borderTopWidth: 0.5,
                borderTopColor: '#ccc',
            },
            labelStyle: {
                fontSize: 12,
                margin: 1
            },
            indicatorStyle: { height: 0 }, //android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        },
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        backBehavior: 'none',

    });

const StackView = StackNavigator({
    Home: { screen: Login },
    Registered: { screen: Registered },
    Welcome: { screen: TabView },
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
