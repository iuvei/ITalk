//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="rocket" size={30} color="#900" />)
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
            <Icon name="rocket" size={30} color="#900" />
        )
    }
    constructor(props) {
        super(props)

        this.state = {

        }
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
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Index;
