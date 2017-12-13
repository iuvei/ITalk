//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, TouchableOpacity, Image } from 'react-native';

// create a component
class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addPageDataSource: ListView.DataSource({
                rowHashChanged: (oldRow, newState) => oldRow != newRow
            })
        }
        this.options = [
            { key: '1', name: '创建群聊', value: 'ceateGroup' },
            { key: '2', name: '添加好友', value: 'addFriends' },
            { key: '3', name: '扫一扫', value: 'scanCode' },
            { key: '4', name: '拍摄', value: 'openCamera' },

        ];
        this.renderListItem = this.renderListItem.bind(this);

    }
    componentWillMount() {
        if (this.options) {
            this.setState({
                addPageDataSource: this.state.addPageDataSource.cloneWithRows(this.options),
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.addPageList) {
            this.setState({
                addPageDataSource: this.state.addPageDataSource.cloneWithRows(nextProps.addPageList),
            })
        }

    }


    renderListItem(log, sectionID, RowID) {
        return (
            <TouchableOpacity onPress={this.props.selectListItem(log.value)}>
                <View style={styles.secondRow}>
                    <Image source={require('../../images/b1.jpg')} style={styles.moodstyle} />
                    <View style={styles.subViewInReader}>
                        <Text>{log.name}</Text>
                    </View>
                </View>

            </TouchableOpacity>
        );
    }




    render() {
        return (

            <Text>2333</Text>

        );
    }
}
/*
  <ListView dataSource={this.state.addPageDataSource} renderRow={this.renderListItem}>

                </ListView>
*/

// define your styles
const styles = StyleSheet.create({
    secondRow: {
        alignItems: 'center'
    },
    moodstyle: {
        height: 30,
        height: 30,
        borderRadius: 30 * 1.6,
    },
    subViewInReader: {
        width: 50
    },
    textInReader: {
        height: 20,
        fontSize: 14,
        margin: 2,
        backgroundColor: '#000'
    }
});

//make this component available to the app
export default Index;
