//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Alert,Image} from 'react-native';

let widthOfMargin = Dimensions.get('window').width * 0.05;
// create a component
class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputedNum: '',
            inputedPW: '',
        }
        this.updateNum = this.updateNum.bind(this);
        this.updatePW = this.updatePW.bind(this);
        this.userPressConfirm = this.userPressConfirm.bind(this);
        this.userPressAddressBook = this.userPressAddressBook.bind(this);
        this.jumpToWaiting=this.jumpToWaiting.bind(this);
    }
    static navigationOptions={
        //一般导航
        //title:'登录',

        //DrawerNavigator导航
        drawerLabel:'Login',
        drawerIcon:({tintColor})=>(
            <Image  source={require('./images/b2.jpg')}
            style={[styles.icon,{tintColor:tintColor}]}
            />
        )
    }


    updateNum(text) {
        this.setState(() => {
            return { inputedNum: text }
        })
    }
    updatePW(text) {
        this.setState(() => {
            return { inputedPW: text }
        })
    }
    userPressConfirm() {
        Alert.alert(
            '提示',
            `确定使用${this.state.inputedNum ?this.state.inputedNum : ' '}号码登录么`,
            [
                { text: '确定', onPress: this.jumpToWaiting },
                { text: '取消', onPress: (() => { }), style: 'cancel' },
            ]
        );
    }
    userPressAddressBook() {

    }
    //---------
    jumpToWaiting() {
        this.props.navigation.navigate('Wait', {
            phoneNumber: this.state.inputedNum,
            userPW: this.state.inputedPW,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder='请输入电话'
                    onChangeText={this.updateNum}
                />
                <Text style={styles.textPromptStyle}>你的手机号码是:{this.state.inputedNum}</Text>

                <TextInput
                    style={styles.textInputStyle}
                    placeholder='请输入密码'
                    secureTextEntry={true}
                    onChangeText={this.updatePW}
                />
                <Text style={styles.bigTextPrompt} onPress={this.userPressConfirm}>确定</Text>
                <Text style={styles.bigTextPrompt} onPress={this.userPressAddressBook}>通讯录</Text>

            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
    },
    textInputStyle: {
        margin: widthOfMargin,
        backgroundColor: 'gray',
        fontSize: 20,
    },
    textPromptStyle: {
        margin: widthOfMargin,
        fontSize: 20
    },
    bigTextPrompt: {
        margin: widthOfMargin,
        backgroundColor: 'gray',
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    icon:{
        width:24,
        height:24,
    }
});

//make this component available to the app
export default Index;
