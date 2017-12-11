//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// 文本居中  给包含text的view加上 alignItems:'center',justifyContent: 'center',
class TextTest1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>happy</Text>
                <Text style={styles.textStyle}>忧伤</Text>

                <View style={styles.viewForTextStyle}>
                    <Text style={styles.textStyle1}>忧伤2</Text>
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
    textStyle: {
        height: 100,
        width: 200,
        fontSize: 30,
        backgroundColor: 'gray',
        textAlign: 'center',
        justifyContent: 'center',
        margin: 5
    },
    textStyle1: {
        fontSize: 30,
    },
    viewForTextStyle: {
        height: 100,
        width: 200,
        backgroundColor: 'gray',
        //textAlign: 'center',
        alignItems:'center',//------
        justifyContent: 'center',
        margin: 5
    }

});

//make this component available to the app
export default TextTest1;
