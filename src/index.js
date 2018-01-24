import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator, } from 'react-navigation'

import {
    LoginByUserNameView,
    /*
    LoginByPhoneView,
    RegistrationView,
    ContactView,PersonalStatusView,NewsView,
    PersonalInfoView,
    ChatView,
    */
} from './views'

const StackView = StackNavigator({
    Home: { screen: LoginByUserNameView }
})

class Index extends Component {
    render() {
        return (
            <StackView/>
        );
    }
}
export default Index;
