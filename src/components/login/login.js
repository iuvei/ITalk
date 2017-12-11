import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, Image, TouchableOpacity } from 'react-native';

let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;
let textSize = totalWidth / 18;

let widthOfMargin = Dimensions.get('window').width * 0.05;

class Index extends Component {
    static navigationOptions = {
        title: '登陆'
    }
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            userPassword: ''
        }
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleUserPasswordChange = this.handleUserPasswordChange.bind(this);
        this.userLogin = this.userLogin.bind(this);
        this.userRegistered = this.userRegistered.bind(this);
    }

    handleUserNameChange(userName) {
        this.setState({ userName })
    }

    handleUserPasswordChange(userPassword) {
        this.setState({ userPassword })
    }

    userLogin() {

    }

    userRegistered() {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.log}>

                </View>
                <TextInput style={styles.textInputStyle}
                    placeholder='用户名'
                    autoFocus={true}
                    onChangeText={this.handleUserNameChange} />

                <TextInput style={styles.textInputStyle}
                    placeholder='密码'
                    secureTextEntry={true}
                    onChangeText={this.handleUserPasswordChange} />
                <TouchableOpacity
                    onPress={this.userLogin}>
                    <View style={styles.viewForLoginStyle}>
                        <Text style={styles.loginButton}>登陆</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.userRegistered}>
                    <View style={styles.viewForRegisteredStyle}>
                        <Text style={styles.registeredButton} >新用户注册</Text>
                    </View>

                </TouchableOpacity>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    icon: {
        width: 20,
        height: 20
    },
    log: {
        width: totalWidth,
        height: textSize * 3,
        borderWidth: 3,
        borderColor: 'black'
    },
    textInputStyle: {
        height: textSize * 2.4,
        width: textSize * 10,
        fontSize: 14,
    },
    viewForLoginStyle: {
        height: textSize * 1.4,
        width: textSize * 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        borderRadius: 8,
    },
    loginButton: {
        fontSize: textSize,
        color: 'white'
    },
    viewForRegisteredStyle: {
        width: textSize * 6,
        height: textSize * 1.4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        borderRadius: 8,
    },
    registeredButton: {
        fontSize: textSize,
        color: 'white'
    },



});


export default Index;
