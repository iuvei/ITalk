import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import AddIcon from 'react-native-vector-icons/MaterialIcons';
import { ContactsDataProvider } from '../../dataProvider'

class Index extends Component {
    static navigationOptions = {
        tabBarLabel: '联系人',
        tabBarIcon: ({ focused, tintColor }) => (
            <Icon name="md-contacts" size={26} color={focused ? "#3498DB" : "#ccc"} />
        ),
        //标题栏
        headerTitle: '联系人',
        headerRight: <AddIcon name="add" size={40} color={"white"} style={{ marginRight: 3 }} />,
        headerLeft:
            <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                <Image style={{ width: 40, height: 40, borderRadius: 15, marginLeft: 3 }} source={require('../../images/b8.jpg')} />
            </TouchableOpacity>,
    }
    constructor(props) {
        super(props)
        this.dp = new ContactsDataProvider();
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
        }
    }
    componentWillMount() {
        this.getList('firends');
    }
    renderHeader(log, sectionID, rowID) {
        constructor.log(log, sectionID, rowID);
        return (
            <TouchableOpacity
            onPress={() => this.props.selectLististItem(rowID)}
        >
        <Text>'标题'</Text>
         </TouchableOpacity>
        );
    }
    renderListItem(log, sectionID, rowID) {
        return (
            <TouchableOpacity
                onPress={() => this.props.selectLististItem(rowID)}
            >
                <View style={styles.viewForListItemStyle}>
                    <Image source={log.header} style={styles.newsHeaderStyle} />

                    <View style={styles.viewFortext}>
                        <View style={styles.viewForTextFirstLine}>
                            <Text style={styles.textFornameStyle}
                                ellipsizeMode='tail'
                                numberOfLines={1}>
                                {log.name}
                            </Text>


                        </View>

                        <View>
                            <Text style={styles.textForContentStyle}
                                ellipsizeMode='tail'
                                numberOfLines={1}>
                                {log.isOnline} {log.description}
                            </Text>
                        </View>


                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    //-------------
    getList(groupId) {
        this.dp.getList(groupId).then((result) => {
            if (Array.isArray(result)) {
                this.setState({ dataSource: this.state.dataSource.cloneWithRows(result) })
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderListItem}
                    renderSectionHeader={this.renderHeader}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: 'white',
        margin: 2
    },
    viewForListItemStyle: {
        flexDirection: 'row',//消息头像与文字  从左到右显示
        borderBottomWidth: 1,
        borderBottomColor: '#d0d0d0',//底部边框线 灰色
        alignItems: 'center',//垂直居中
        //marginTop:2,
        height: 60,

    },
    viewFortext: {
        marginLeft: 6//消息的 文字与左边间隔6
    },
    newsHeaderStyle: {
        height: 35,//消息列表的头像
        width: 35,
        borderRadius: 20,
    },
    viewForTextFirstLine: {
        width: 330,
        flexDirection: 'row',//标题与时间  从左到右显示
        justifyContent: 'space-between'//
    },
    textFornameStyle: {
        fontSize: 14,//名称
        width: 100,
        color: 'black'
    },

    textForContentStyle: {
        fontSize: 13,//内容
        width: 100,


    }
});

//make this component available to the app
export default Index;
