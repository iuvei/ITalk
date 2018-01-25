import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator, } from 'react-navigation'

import {
    LoginByUserNameView,
    
    LoginByPhoneView,
    RegistrationView,
    ContactView,PersonalStatusView,NewsView,
    PersonalInfoView,
    ChatView,
    
} from './views'

const TabView = TabNavigator({
    NewsView: { screen: NewsView },
    ContactView: { screen: ContactView },
    PersonalStatusView: { screen: PersonalStatusView }
}, {
        tabBarOptions: {
            activeTintColor: '#3498DB',//标签激活时 天蓝色
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
    LoginByUserNameView: { screen: LoginByUserNameView },
    RegistrationView: { screen: RegistrationView },
    TabView: { screen: TabView, },
    ChatView: { screen: ChatView },

}, {
        initialRouteName: 'LoginByUserNameView',
        navigationOptions: {
            //headerTintColor: 'white',
            headerStyle: { backgroundColor: "#3498DB" },
            headerTitleStyle: { alignSelf: 'center', color: 'white' },
        },
    })

const DrawerView = DrawerNavigator({
    Home: { screen: StackView, },
    PersonalInfoView: { screen: PersonalInfoView },
})

class Index extends Component {
    render() {
        return (
            <DrawerView/>
        );
    }
}
export default Index;
