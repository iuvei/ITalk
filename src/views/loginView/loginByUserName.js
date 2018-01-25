//import liraries
import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TextInput, Alert,
    Dimensions, Image, TouchableOpacity
} from 'react-native';

let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;

const logo = require('../../assets/images/350_350.png')

// create a component
class Index extends Component {
    static navigationOptions = {
        header: null//隐藏导航栏
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
        this.forgetPassword = this.forgetPassword.bind(this);
        this.userRegistered = this.userRegistered.bind(this);
    }

    handleUserNameChange(userName) {
        this.setState({ userName })
    }

    handleUserPasswordChange(userPassword) {
        this.setState({ userPassword })
    }

    userLogin() {
        const { userName, userPassword } = this.state;
        /*if (userName === "" || userPassword === "") {
            Alert.alert(
                '错误提示',
                '用户名密码不能为空',
                [{ text: '确定' }]
            );
        } else {
            this.props.navigation.navigate('Welcome', { userName, userPassword });
        }*/
        this.props.navigation.navigate('TabView', { userName, userPassword });
    }

    forgetPassword() {

    }

    userRegistered() {
        this.props.navigation.navigate('RegistrationView');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoStyle}>
                    <Image style={{ height: 200, width: 200 }} source={logo} />
                </View>

                <View style={styles.main}>
                    <View style={styles.textInputView}>
                        <TextInput style={styles.textInput}
                            placeholder='用户名'
                            //autoFocus={true}
                            underlineColorAndroid='transparent'
                            onChangeText={this.handleUserNameChange} />
                    </View>

                    <View style={styles.textInputView}>
                        <TextInput style={styles.textInput}
                            placeholder='密码'
                            secureTextEntry={true}
                            underlineColorAndroid='transparent'
                            onChangeText={this.handleUserPasswordChange} />
                    </View>

                    <TouchableOpacity
                        style={styles.loginTextView}
                        onPress={this.userLogin}>
                        <View>
                            <Text style={styles.loginText} >登陆</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.ViewForFootStyle}>
                        <Text style={styles.textForFootStyle} onPress={this.forgetPassword}>忘记密码?</Text>
                        <Text style={styles.textForFootStyle} onPress={this.userRegistered}>注册新账号</Text>
                    </View>
                </View>
            </View>
        );
    }
}
/*

*/
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    logoStyle: {
        height: 200,
        width: 200,
    },
    main: {
        width: '80%',
        marginTop: 10,
    },
    textInputView: {
        marginTop: 10,
        height: 50,
        borderRadius: 5,
        borderWidth: 0.3,
        borderColor: '#000',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    textInput: {
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
    //
    ViewForFootStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    textForFootStyle: {
        color: '#4A90E2',
        textAlign: 'center',
    },
});

//make this component available to the app
export default Index;
