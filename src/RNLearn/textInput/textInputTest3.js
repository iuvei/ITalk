//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// 高度自动增长的输入框
//自定义的高度动态调整组件
class AutoExpandingTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = { height: 0, text: '555' };
        this._onContentSizeChange = this._onContentSizeChange.bind(this);
        this._onChange=this._onChange.bind(this);
    }

    _onContentSizeChange(event) {
        this.setState({
            //text: event.nativeEvent.text,
            height: event.nativeEvent.contentSize.height,
        });
    }
    _onChange(event) {
        this.setState({
            text: event.nativeEvent.text,
        });
    }

    render() {
        return (
            <TextInput {...this.props} //将自定义组件的所有属性交给TextInput
                multiline={true}
                underlineColorAndroid='transparent'
                onContentSizeChange={this._onContentSizeChange}
                onChange={this._onChange}
                style={[styles.textInputStyle, { height: Math.max(35, this.state.height) }]}
                value={this.state.text} />
        );
    }
}


class TextInputTest1 extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        this._onChangeText = this._onChangeText.bind(this);

    }
    _onChangeText = (newText) => {
        console.log('inputed text：' + newText);
    }

    render() {
        return (
            <View style={styles.container}>
                <AutoExpandingTextInput style={styles.textInputStyle}
                    onChangeText={this._onChangeText} />
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
    },
    borderStyle: {
        borderWidth: 1,
    },
    textInputStyle: {
        height: 30,
        width: 300,
        fontSize: 20,
        backgroundColor: 'grey',
        paddingTop: 0,
        paddingBottom: 0,
    },



});

//make this component available to the app
export default TextInputTest1;
