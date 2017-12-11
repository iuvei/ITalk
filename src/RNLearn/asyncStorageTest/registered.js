//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, ToastAndroid, StyleSheet } from 'react-native';

import DataHandler from './dataHandler'

// create a component
class Registered extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dataSource: "",
        }
        this.userName = '';
        this.password = '';
    }
    saveData() {
        //ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
        let data = {
            key: this.userName + this.password,
            userName: this.userName,
            password: this.password,
        }
        DataHandler.saveData(data).then((result) => {
            ToastAndroid.show(result, ToastAndroid.SHORT);
        })
    }
    getAllData() {
        DataHandler.clearData();
        // DataHandler.getAllData().then((result) => {
        //     if(Array.isArray(result)){
        //         console.log(result);
        //         let str = String(result);
        //         ToastAndroid.show(str, ToastAndroid.SHORT);
        //         this.setState({ dataSource: str })
        //     }

        // })
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.titleInputStyle}
                    placeholder='用户名'
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => { this.userName = text }}
                />
                <TextInput style={styles.titleInputStyle}
                    placeholder='密码'
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => { this.password = text }}
                />
                <View style={styles.styleForButton}>
                    <Text
                        style={styles.textButton}
                        onPress={this.saveData.bind(this)}
                    >注册</Text>
   
                </View>
                <View style={styles.styleForButton}>
                    <Text
                        style={styles.textButton}
                        onPress={this.getAllData.bind(this)}
                    >获取数据</Text>
                </View>
                <TextInput
                    style={styles.diaryBodyStyle}
                    multiline={true}
                    defaultValue={this.state.dataSource} />

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
        backgroundColor: '#2c3e50',
    },
    titleInputStyle: {
        fontSize: 20,
        backgroundColor: 'grey',
        height: 50,
        color: 'black',
        margin: 4,
        borderWidth: 2,
        width: '100%',
        borderColor: 'black',
    },
    styleForButton: {
        width: 100,
        height: 50,
        borderWidth: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 20,

    },
    diaryBodyStyle: {
        flex: 1,
        width: '100%',
        fontSize: 20,
        backgroundColor: 'grey',
        margin: 4,
    },
});

//make this component available to the app
export default Registered;
