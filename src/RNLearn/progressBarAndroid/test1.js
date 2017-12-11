//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ProgressBarAndroid } from 'react-native';

// create a component
class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
               <ProgressBarAndroid
                styleAttr='Horizontal'
                indeterminate={false}
                style={{top:50}}
                progress={0.5}
               />
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
