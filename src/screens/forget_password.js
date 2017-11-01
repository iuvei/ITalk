import React, { Component } from 'react'

import {
    FlatList, StyleSheet, Button, Text, View, TextInput
} from 'react-native';
import { NavBar, Icon, List } from 'antd-mobile';
export default class Login extends Component {
    static navigationOptions = {
        title: '忘记密码',
        headerTintColor: 'black',
    }
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    log_in() {

    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput style={{ width: 100 + '%' }} placeholder="手机号/账号"></TextInput>
                <TextInput style={{ width: 100 + '%' }} placeholder="验证码"></TextInput>
                <TextInput style={{ width: 100 + '%' }} placeholder="新的密码"></TextInput>
                <TextInput style={{ width: 100 + '%' }} placeholder="确认密码"></TextInput>
                <View style={{ width: 100 + '%', flexDirection: 'row', paddingBottom: 5 }}>
                    <Text style={{ width: 50 + '%', paddingRight: 5 }}>安全中心</Text>
                </View>
                <Button
                    onPress={this.log_in}
                    title="更改密码"
                    color="#841584"
                    accessibilityLabel="更改密码"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        height: 200,
        width: 100 + '%'
    },
    userName: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        height: 44,
    },
})