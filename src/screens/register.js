import React, { Component } from 'react'

import {
    FlatList, StyleSheet, Text, View
} from 'react-native';
import { NavBar, Icon, Button, List } from 'antd-mobile';
export default class Login extends Component {
    static navigationOptions = {
        title: '注册',
        headerLeft: null, //去掉箭头
        headerTitle: 'ITalk'
    }
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }


    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        width: 50
    },
})