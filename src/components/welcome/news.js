//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ListView, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { AddPage } from '../index'
// create a component
/*
 <Image
            source={focused ? require('../res/images/hot_hover.png') : require('../res/images/hot.png')}
            style={{ width: 26, height: 26, tintColor: tintColor }}
          />
*/
class Index extends Component {
    static navigationOptions = {
        tabBarLabel: '消息',
        tabBarIcon: ({ focused, tintColor }) => (
            <Icon name="message" size={26} color={focused ? "#4BC1D2" : "#ccc"} />
        ),
        headerRight: <Icon name="add-to-list" size={26} color={"#ccc"} />,
        headerLeft: <Icon name="add-to-list" size={26} color={"#ccc"} />,
    }
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    selectLististItem(value) {
        console.log(value)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.listItemStyle}>
                    <Image style={{ width: 30, height: 30 }}
                        source={require('../../images/b1.jpg')} />
                    <View style={styles.ViewForTextStyle}>
                    <Text>一段描述</Text>
                    </View>
                    
                </View>


            </View>
        );
    }
}
/*
 <AddPage />
*/
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderWidth: 1,
        borderColor: 'black',
        margin: 5
    },
    listItemStyle: {
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        //textAlign: 'center'
    },
    ViewForTextStyle: {
        height:30,
        width:100,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: 'black',
    }
});

//make this component available to the app
export default Index;
