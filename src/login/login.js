import React, { Component } from 'react'

import {
    View, Text
} from 'react-native';
import { NavBar, Icon, Button, List } from 'antd-mobile';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}
