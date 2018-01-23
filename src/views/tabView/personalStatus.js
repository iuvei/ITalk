//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity,ScrollView,ListView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// create a component
class Index extends Component {
    static navigationOptions = {
        tabBarLabel: '动态',
        tabBarIcon: ({ focused, tintColor }) => (
            <Icon name="star" size={26}  color={focused ?"#3498DB" :"#ccc"} />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>动态</Text>
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
