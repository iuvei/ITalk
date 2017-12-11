//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// 文本的属性继承 与 文本显示的阴影效果
class TextTest1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{
                    fontSize: 20, textAlign: 'center',
                    textShadowOffset: { width: 5, height: 5 },
                    textShadowRadius: 2,
                    textShadowColor: 'grey'
                }}>
                    我是20号字体
                    <Text style={{ fontWeight: 'bold' }}>
                        我是20号加粗字体
                        <Text style={{ color: 'black' }}>
                            我是20号加粗黑色字体
                        </Text>
                    </Text>

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
        //flexDirection:'column'
    },
    text1: {

    },
    text2: {

    },
    text3: {

    },
});

//make this component available to the app
export default TextTest1;
