//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ListView, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { AddPage } from '../index'

import { NewsDataProvider } from '../../dataProvider'
// create a component
/*
 <Image
            source={focused ? require('../res/images/hot_hover.png') : require('../res/images/hot.png')}
            style={{ width: 26, height: 26, tintColor: tintColor }}
          />
*/
class Index extends Component {
    static navigationOptions =({ navigation,screenProps})=> ({
        tabBarLabel: '消息',
        tabBarIcon: ({ focused, tintColor }) => (
            <Icon name="message" size={26} color={focused ? "#4BC1D2" : "#ccc"} />
        ),
        headerRight: <Icon name="add-to-list" size={26} color={"#ccc"} />,
        headerLeft:
            <TouchableOpacity onPress={()=>navigation.navigate('DrawerOpen')}>
                <Image style={{ width: 35, height: 35, borderRadius: 15,marginLeft:3 }} source={require('../../images/b8.jpg')} />
            </TouchableOpacity>,

    })
    constructor(props) {
        super(props)
        this.dp = new NewsDataProvider();
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
        }

    }
    componentWillMount() {
        this.getList();
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {

    }
    getPeronalInfo(){
        this.props.navigation.navigate('PersonalInfo');
    }
    getList() {
        this.dp.getList().then((result) => {
            if (Array.isArray(result)) {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(result),
                })
            } else {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows([]),
                })
            }

        })
    }
    renderListItem(log, sectionID, rowID) {
        return (
            <TouchableOpacity
                onPress={() => this.props.selectLististItem(rowID)}
            >
                <View style={styles.viewForListItemStyle}>
                    <Image source={log.header} style={styles.newsHeaderStyle} />

                    <View style={styles.viewFortext}>
                        <Text style={styles.textFornameStyle}
                            ellipsizeMode='tail'
                            numberOfLines={1}>
                            {log.name}
                        </Text>
                        <Text style={styles.textForContentStyle}
                            ellipsizeMode='tail'
                            numberOfLines={1}>
                            {log.content}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }


    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderListItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: 'white',
        margin: 2
    },
    viewForListItemStyle: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#d0d0d0',
        alignItems: 'center',
        //marginTop:2,
        height: 50

    },
    viewFortext: {
        marginLeft: 6
    },
    newsHeaderStyle: {
        height: 35,
        width: 35,
        borderRadius: 20,
    },
    textFornameStyle: {
        fontSize: 14,
        width: 100,
        color: 'black'
    },
    textForContentStyle: {
        fontSize: 12,
        width: 100,


    }
});
/*
        text-overflow:ellipsis,
        white-space: nowrap,
*/
//make this component available to the app
export default Index;
