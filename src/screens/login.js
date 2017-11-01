import React, { Component } from 'react'

import {
    FlatList, StyleSheet, Button, Text, View, TextInput
} from 'react-native';
import { NavBar, Icon, List } from 'antd-mobile';
export default class Login extends Component {
    static navigationOptions = {
        title: '登录',
        headerTintColor: 'blue',
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
                <TextInput style={{ width: 100 + '%' }} placeholder="密码"></TextInput>
                <View style={{ width: 100 + '%', flexDirection: 'row', }}><Text style={{ width: 50 + '%', paddingLeft: 5 }}>忘记密码？</Text><Text style={{ width: 50 + '%', paddingRight: 5, textAlign: 'right' }}>注册</Text></View>
                    <Button
                        onPress={this.log_in}
                        title="登录"
                        color="#841584"
                        accessibilityLabel="登录"
                    /> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        height:200,
        width:100+'%'
    },
    userName: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        height: 44,
    },
})