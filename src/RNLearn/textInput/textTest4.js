//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// 带边框的文本跨平台兼容,用View包裹text，在view上设置边框
class TextTest1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.borderStyle}>
                    <Text style={styles.textStyle}>Ajfg你好</Text>
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
    borderStyle:{
        borderWidth: 1,
    },
    textStyle: {
        //height: 50,
        width: 200,
        fontSize: 50,
        backgroundColor: 'gray',
      
        //textAlign: 'center',
        //justifyContent: 'center',
        //margin: 5
    },



});

//make this component available to the app
export default TextTest1;
