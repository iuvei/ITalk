//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// 带边框的文本跨平台兼容,用View包裹text，在view上设置边框

//输入框居中对齐的跨平台兼容，使用一个view包含输入框
class TextInputTest1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TextInput style={styles.textInputStyle}
                        defaultValue='Ajfg你好'
                        underlineColorAndroid='transparent'

                    />
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        //flexDirection:'column'
    },
    borderStyle: {
        borderWidth: 1,
    },
    textInputStyle: {
        height: 70,
        width: 200,
        fontSize: 50,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },



});

//make this component available to the app
export default TextInputTest1;
