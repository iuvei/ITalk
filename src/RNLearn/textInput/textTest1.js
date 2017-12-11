//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// 文本超过范围显示省略号
class TextTest1 extends Component {
    render() {
        const str = '我很长，显示不怎么办';
        return (
            <View style={styles.container}>
                <Text
                    style={styles.textStyle}
                    ellipsizeMode='head'
                    numberOfLines={1}
                >{str}</Text>

                <Text
                    style={styles.textStyle}
                    ellipsizeMode='middle'
                    numberOfLines={1}
                >{str}</Text>

                <Text
                    style={styles.textStyle}
                    ellipsizeMode='tail'
                    numberOfLines={1}
                >{str}</Text>

                <Text
                    style={styles.textStyle}
                    //ellipsizeMode='clip'
                    numberOfLines={1}
                >{str}</Text>
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
    textStyle: {
        height: 45,
        width: 200,
        fontSize: 30,
        backgroundColor: 'gray',
        textAlign: 'center',
        margin: 5,
    }
});

//make this component available to the app
export default TextTest1;
