//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import PropTypes from 'prop-types'
// create a component
class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        this.onGobackPressed = this.onGobackPressed.bind(this)
    }
    static navigationOptions = {
        title: '登陆中',
    }
    static defaultprops = {
        phoneNumber: '',
        userPW: '',
    }

    static propTypes = {
        phoneNumber: PropTypes.string,
        userPW: PropTypes.string,
    }
    onGobackPressed() {
        this.props.navigation.goBack();
    }

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Text style={styles.textPromptStyle}>
                    登录使用的手机号是:{params.phoneNumber}
                </Text>
                <Text style={styles.textPromptStyle}>
                    登录使用的密码是:{params.userPW}
                </Text>
                <Text style={styles.bigTextPrompStyle} onPress={this.onGobackPressed}>
                    返回
              </Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textPromptStyle: {
        fontSize: 20,

    },
    bigTextPrompStyle: {
        width: 300,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 60
    }
});

//make this component available to the app
export default Index;



