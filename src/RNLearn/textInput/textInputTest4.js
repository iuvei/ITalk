//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Clipboard,ToastAndroid } from 'react-native';


class TextInputTest1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            textFromCliboard: '22',
        }
        this.pasteFormClipboard = this.pasteFormClipboard.bind(this);
        this.copyToClipboard = this.copyToClipboard.bind(this);

    }
    pasteFormClipboard() {
        Clipboard.getString().then((textFromCliboard) => {
            this.setState({ textFromCliboard })
            ToastAndroid.show('粘贴成功 !', ToastAndroid.SHORT);
        }).catch((error) => {
            console.log('pasteFormClipboard error');
            console.log(error);
        })
    }
    copyToClipboard() {
        Clipboard.setString('abcd你好');
        ToastAndroid.show('复制了 abcd你好几个字 !', ToastAndroid.SHORT);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {this.state.textFromCliboard}
                </Text>
                <Text style={styles.instructions}
                    onPress={this.copyToClipboard}>
                    复制(abcd你好)到剪切板
               </Text>
                <Text style={styles.instructions}
                    onPress={this.pasteFormClipboard}>
                    粘贴
               </Text>
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
        borderWidth: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 15,
        backgroundColor: 'grey',
        fontSize: 30,
    }

});

//make this component available to the app
export default TextInputTest1;
