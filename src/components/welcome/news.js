//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ListView,Picker } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

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
    selectListItem(value){
        console.log(value)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>消息</Text>
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
        backgroundColor: '#F5FCFF',
    },
});

//make this component available to the app
export default Index;
