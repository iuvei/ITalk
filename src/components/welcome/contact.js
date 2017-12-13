//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity,ScrollView,ListView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//FontAwesome    MaterialIcons

// create a component
class Index extends Component {
    static navigationOptions = {
        tabBarLabel: '联系人',
        tabBarIcon: ({ focused, tintColor }) => (
            <Icon name="md-contacts" size={26}  color={focused ?"#4BC1D2" :"#ccc"} />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>联系人</Text>
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
