//import liraries
import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image, TouchableOpacity,
    ScrollView, ListView, TextInput, Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;

// create a component
class Index extends Component {
    static navigationOptions = {
        headerLeft:
            <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                <Image style={{ width: 40, height: 40, borderRadius: 15, marginLeft: 3 }} source={require('../../assets/images/b8.jpg')} />
            </TouchableOpacity>,
        headerTitle: '动态',
        headerTitleStyle: { textAlign: 'center' },
        headerRight: <Text>更多</Text>,

        tabBarLabel: '动态',
        tabBarIcon: ({ focused, tintColor }) => (
            <Icon name="star" size={26} color={focused ? "#3498DB" : "#ccc"} />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainerStyle}>
                    <View style={styles.searchContainerStyle}>
                        <TextInput style={styles.seatchInputStyle}
                            placeholder='搜索'
                            defaultValue='Ajfg你好'
                            underlineColorAndroid='transparent'
                            onChangeText={this.handleUserPasswordChange} />
                    </View>

                    <View style={styles.topThreeStyle}>
                        <View style={styles.statusIconStyle}>

                        </View>
                        <View style={styles.statusIconStyle}>

                        </View>
                        <View style={styles.statusIconStyle}>

                        </View>
                    </View>
                </View>





            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    topContainerStyle: {
        width: totalWidth,
        borderWidth: 1,
        borderColor: 'red',
    },
    searchContainerStyle: {
        borderWidth: 1,
        marginTop: 5,
    },
    seatchInputStyle: {
        //height:30,
        fontSize: 10,
        width: totalWidth * 0.9,
        backgroundColor: '#F2F4F4',//搜索框背景灰色
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },

    topThreeStyle: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    statusIconStyle:{
        width:100,
        height:50,
        borderColor:'red',
        borderWidth:1
    }

});

//make this component available to the app
export default Index;
/*
        // color: 'black',
        // borderWidth: 1,
        // borderColor: 'gray',
*/