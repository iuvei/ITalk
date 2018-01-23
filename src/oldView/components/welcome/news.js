import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ListView, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import AddIcon from 'react-native-vector-icons/MaterialIcons';
import { AddPage } from '../index'

import { NewsDataProvider } from '../../dataProvider'

/*
 <Image
            source={focused ? require('../res/images/hot_hover.png') : require('../res/images/hot.png')}
            style={{ width: 26, height: 26, tintColor: tintColor }}
          />

          <Text style={{fontSize:14,alignItems:'center',marginLeft:100}}>消息</Text>
*/
class Index extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        //tab栏标题
        tabBarLabel: '消息',
        //tab栏图标
        tabBarIcon: ({ focused, tintColor }) => (
            <Icon name="message" size={26} color={focused ? "#3498DB" : "#ccc"} />
        ),
        //标题栏
        headerTitle: '消息',
        headerRight: <AddIcon name="add" size={40} color={"white"} style={{ marginRight: 3 }} />,
        headerLeft:
            <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                <Image style={{ width: 40, height: 40, borderRadius: 15, marginLeft: 3 }} source={require('../../images/b8.jpg')} />
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
    getPeronalInfo() {
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
                        <View style={styles.viewForTextFirstLine}>
                            <Text style={styles.textFornameStyle}
                                ellipsizeMode='tail'
                                numberOfLines={1}>
                                {log.name}
                            </Text>

                            <Text style={styles.textForTimeStyle}>2017-12-24</Text>
                        </View>

                        <View>
                            <Text style={styles.textForContentStyle}
                                ellipsizeMode='tail'
                                numberOfLines={1}>
                                {log.content}
                            </Text>
                        </View>


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
        width:330,
        flexDirection: 'row',//标题与时间  从左到右显示
        justifyContent:'space-between'//
    },
    textFornameStyle: {
        fontSize: 14,//名称
        width: 100,
        color: 'black'
    },
    textForTimeStyle: {
        fontSize:12,//时间
        color:'gray'
    },
    textForContentStyle: {
        fontSize: 13,//内容
        width: 100,


    }
});

export default Index;
