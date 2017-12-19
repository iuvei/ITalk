//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator, } from 'react-navigation'
import {
    Login, Registered, Contact,
    PersonalStatus, NewsList, AddPage, PersonalInfo,
    DrawTest
} from './components'

const TabView = TabNavigator({
    NewsList: { screen: NewsList },
    Contact: { screen: Contact },
    PersonalStatus: { screen: PersonalStatus }
}, {
        tabBarOptions: {
            activeTintColor: '#4BC1D2',//标签激活时 天蓝色
            inactiveTintColor: '#000',//标签非激活时 黑色
            showIcon: true,
            showLabel: true,
            upperCaseLabel: false,
            pressColor: '#823453',//按下时涟漪效果的颜色  紫红色
            pressOpacity: 0.8,
            style: {
                backgroundColor: '#fff',//白色
                paddingBottom: 0,
                borderTopWidth: 0.5,
                borderTopColor: '#ccc',//灰色
                borderWidth: 1,
                borderColor: 'black'

            },
            labelStyle: {
                fontSize: 12,
                //margin: 1
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
    Login: { screen: Login },
    Registered: { screen: Registered },
   Welcome: {screen: TabView,},
    
})

const DrawerView = DrawerNavigator({
    Home: {screen: StackView,},
    PersonalInfo: { screen: PersonalInfo },
})

class Index extends Component {
    render() {
        return (
            <DrawerView />
        );
    }
}



//make this component available to the app
export default Index;
