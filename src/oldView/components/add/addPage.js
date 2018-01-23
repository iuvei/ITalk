//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, TouchableOpacity, Image, Picker } from 'react-native';

// create a component
class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addPageDataSource: new ListView.DataSource({
                rowHasChanged: (oldRow, newRow) => oldRow !== newRow
            }),
            choice: '',
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



    renderListItem(log, sectionID, rowID) {
        return (
            <TouchableOpacity
                onPress={() => this.props.selectLististItem(log.value)}
            >
                <View style={styles.ViewForAddPage}>

                    <Image style={styles.moodStyle} source={require('../../images/b1.jpg')} />

                    <View style={styles.subViewInReader}>
                        <Text style={styles.textInReader}>
                            {log.name}
                        </Text>

                    </View>
                </View>
            </TouchableOpacity>
        );
    }




    render() {
        return (
            <View style={styles.container}>
                <ListView dataSource={this.state.addPageDataSource} renderRow={this.renderListItem}>

                </ListView>
            </View>

        );
    }
}
/*
  <Text>2333</Text>
  <ListView dataSource={this.state.addPageDataSource} renderRow={this.renderListItem}>

   </ListView>

                 <Image style={{ height: 26, width: 26, borderRadius: 50 }} source={require('../../images/b1.jpg')} />
*/

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginLeft: -150
    },
    secondRow: {

        alignItems: 'center'
    },
    moodstyle: {
        height: 100,
        width: 100,
        borderRadius: 5,
    },
    subViewInReader: {
        width: 50
    },
    textInReader: {
        height: 20,
        fontSize: 14,
        margin: 2,
        backgroundColor: '#fff'
    }
});

//make this component available to the app
export default Index;
