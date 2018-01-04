import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//Entypo
import EntypoIcon from 'react-native-vector-icons/Entypo';

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
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (oldSH, newSH) => oldSH !== newSH,
                //返回渲染行所需的数据（指定如何从原始dataBlob中提取数据）
                getRowData: (data, sectionID, rowID) => {
                    if (data[sectionID][0].hide) {
                        return undefined;
                    } else {
                        return data[sectionID][rowID];
                    }
                },
                //获取section标题数据。
                getSectionHeaderData: (data, sectionID) => {
                    return data[sectionID];
                }
            }),
            //
            defaultDataBlob: [],
            dataBlob: [],
            sectionIdentities: [],
        }
        //this.onPressSectionHeader=this.onPressSectionHeader.bind(this);
        this.renderSectionHeader = this.renderSectionHeader.bind(this);
    }
    componentWillMount() {
        this.getList('firends');
    }
    //标题点击事件
    onPressSectionHeader(sectionID) {

        let { dataBlob, defaultDataBlob, dataSource, sectionIdentities } = this.state;
        let newdataBlob = this.state.dataBlob;
        for (let group in newdataBlob) {
            if (sectionID === group) {
                 //newdataBlob[group] = newdataBlob[group].length === 0 ? defaultDataBlob[group] : [];
                newdataBlob[sectionID][0].hide = !newdataBlob[sectionID][0].hide;
            }
        }
        this.setState({
            dataBlob: newdataBlob,
            //dataSource: dataSource.cloneWithRowsAndSections(newdataBlob, sectionIdentities),
        })

       
    }

    //渲染标题
    renderSectionHeader(sectionData, sectionID) {

        return (
            <TouchableOpacity
                onPress={this.onPressSectionHeader.bind(this, sectionID)}
            >
                <View style={styles.viewStyleForSectionHeader}>
                    <View style={{ flexDirection: 'row' }}>
                        <EntypoIcon name="chevron-small-down" size={40} color={"black"} style={{ marginRight: 3 }} />
                        <Text style={{ lineHeight: 30 }}>{sectionID}</Text>
                    </View>
                    <Text style={{ lineHeight: 30 }}>5/20</Text>
                </View>

            </TouchableOpacity>
        );
    }
    //渲染每一行
    renderListItem(log, sectionID, rowID) {
        if (log === undefined || (rowID == 0 && log.hide)) return null;
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
                //标题  原始数据  行数据对应的ID

                let sectionIdentities = [], dataBlob = [];
                sectionIdentities = result.map((item, index) => {
                    if (sectionIdentities.includes(item) == false) {
                        return item.group;
                    } else {
                        return null;
                    }
                })

                sectionIdentities.forEach((section) => {
                    dataBlob[section] = result.filter((item) =>
                        item.group === section
                    )
                });


                this.setState({
                    //dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIdentities),
                    defaultDataBlob: dataBlob,
                    dataBlob,
                    sectionIdentities,
                })
            }
        })
    }
    render() {
        let { dataBlob, defaultDataBlob, dataSource, sectionIdentities } = this.state;
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIdentities)}
                    renderRow={this.renderListItem}
                    renderSectionHeader={this.renderSectionHeader}
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


    },
    viewStyleForSectionHeader: {
        width: 360,
        height: 40,

        flexDirection: 'row',//标题与时间  从左到右显示
        justifyContent: 'space-between'//     
    }
});

//make this component available to the app
export default Index;
