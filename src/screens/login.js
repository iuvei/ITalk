import React, { Component } from 'react'
import { List, ActionSheet, InputItem, Button } from 'antd-mobile';
import {
    FlatList, StyleSheet, Text, View, TextInput
} from 'react-native';
export default class Login extends Component {
    static navigationOptions = {
        title: '添加或注册账号',

        headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 18,
            color:'#fff',
        }
        ,
        headerStyle: {
            backgroundColor: 'rgb(16, 142, 233)'
        },

        // headerStyle:{
        //     backgroundColor:rgb(16, 142, 233)
        // }
    }
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    log_in() {

    }
    showActionSheet = () => {
        const BUTTONS = ['找回密码', '短信验证码登录', '取消'];
        const { navigate } = this.props.navigation;
        ActionSheet.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: BUTTONS.length - 1,
            maskClosable: false,
            'data-seed': 'logId',
        },
            (buttonIndex) => {
                
               if(buttonIndex===0){return navigate('ForgetPassword')}
            });
    }
    //--------
    login(){
        
    }


    render() {
        const self = this;

        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <List>
                    <InputItem
                        clear
                        placeholder="QQ号/手机/邮箱"
                        ref={el => this.autoFocusInst = el}
                    ></InputItem>
                    <InputItem
                        clear
                        placeholder="密码"
                        ref={el => this.customFocusInst = el}
                    ></InputItem>
                </List>
                <Button onPress={this.login} style={{ marginLeft: 8, marginRight: 8, marginTop: 8 }} type="primary">登　录</Button>
                <View style={{ width: 100 + '%', flexDirection: 'row', paddingTop: 5 }}>
                    <Text onPress={self.showActionSheet} style={{ width: 50 + '%', paddingLeft: 8 }}>忘记密码？</Text>
                    <Text onPress={() => navigate('Register')} style={{ width: 50 + '%', paddingRight: 8, textAlign: 'right' }}>新用户注册</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        width: 100 + '%',
        top: 10
    },
    userName: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        height: 44,
    },
})