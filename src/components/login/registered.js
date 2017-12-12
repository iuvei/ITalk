//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

// create a component
class Index extends Component {
    static navigationOptions = {
        title: '注册',
        headerBackTitle: '返回登录'
    }
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            password: '',
            nickname: '',

        }
        this.userNameChange = this.userNameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.nickNameChange = this.nickNameChange.bind(this);
        this.userRegisteredConirm = this.userRegisteredConirm.bind(this)
    }
    userNameChange(userName) {
        this.setState({ userName })
    }
    passwordChange(password) {
        this.setState({ password })
    }
    nickNameChange(nickname) {
        this.setState({ nickname })
    }

    userRegisteredConirm() {
        const { userName, password, nickname } = this.state;
        if (userName === "" || password === "") {
            Alert.alert(
                '错误提示',
                '用户名密码不能为空',
                [{ text: '确定' }]
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textInputView}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='用户名'
                        onChangeText={this.userNameChange} />
                </View>
                <View style={styles.textInputView}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInput}
                        placeholder='密码'
                        onChangeText={this.passwordChange} />
                </View>
                <View style={styles.textInputView}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='昵称(可选)'
                        onChangeText={this.nickNameChange} />
                </View>
                <TouchableOpacity
                    style={styles.loginTextView}
                    onPress={this.userRegisteredConirm}>
                    <View>
                        <Text style={styles.loginText}>注册</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#fff',
    },
    textInputView: {
        marginTop: 10,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 0.3,
        borderColor: '#000',
        flexDirection: 'column',
        justifyContent: 'center',

    },
    textInput: {
        backgroundColor: '#fff',
        height: 45,
        margin: 18
    },
    loginText: {
        color: '#fff',
        fontWeight: 'bold',
        width: 30,
    },
    loginTextView: {
        marginTop: 10,
        height: 50,
        backgroundColor: '#3281dd',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default Index;
