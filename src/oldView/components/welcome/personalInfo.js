//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Index extends Component {
    static navigationOptions = {  
        drawerLabel: '首页',  
        // drawerIcon:({tintColor}) => (  
        //     <Image  
        //         source={require('./../imgs/ic_happy.png')}  
        //         style={[styles.icon, {tintColor: tintColor}]}/>  
        // ),  
    };  
    render() {
        return (
            <View style={styles.container}>
                <Text>Index</Text>
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
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default Index;
