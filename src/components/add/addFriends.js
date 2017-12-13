//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

// create a component
class Index extends Component {
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
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Index;
