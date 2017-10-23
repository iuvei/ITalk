import React, { Component } from 'react'

import {
    View, Text
} from 'react-native';
import { NavBar, Icon, Button, List } from 'antd-mobile';
export default class Login extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        
                    ]}
                >登录</NavBar>
            </View>
        );
    }
}
