//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, StatusBar, ListView } from 'react-native';
import MVC from './MVC'
// create a component
class DiaryList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            diaryListDataSource: new ListView.DataSource({
                rowHasChanged: (oldRow, newRow) => oldRow !== newRow
            }),
        }
        this.updateSearchKeyword = this.updateSearchKeyword.bind(this);
        this.renderListItem = this.renderListItem.bind(this);

    }

    componentWillMount() {
        if (!this.props.diaryList) return;
        this.setState({
            diaryListDataSource: this.state.diaryListDataSource.cloneWithRows(this.props.diaryList)
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            diaryListDataSource:
                this.state.diaryListDataSource.cloneWithRows(nextProps.diaryList)
        })
    }
    updateSearchKeyword(text) {
        this.props.searchKeyword(text);
    }
    renderListItem(log, sectionID, rowID) {
        return (
            <TouchableOpacity
                onPress={() => this.props.selectLististItem(rowID)}
            >
                <View style={MVC.secondRow}>

                    <Image style={MVC.moodStyle} source={log.mood} />

                    <View style={MVC.subViewInReader}>
                        <Text style={MVC.textInReader}>
                            {log.title}
                        </Text>
                        <Text style={MVC.textInReader}>
                            {log.time}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }




    render() {
        const { diaryMood, diaryTime, diaryTitle, diaryBody } = this.state;
        return (
            <View style={MVC.container}>
                <StatusBar hidden={true} />
                <View style={MVC.firstRow}>
                    <View style={{ borderWidth: 1 }}>
                        <TextInput
                            placeholder="搜索框"
                            underlineColorAndroid='transparent'
                            autoCapitalize='none'
                            clearButtonMode='while-editing'
                            onChangeText={this.updateSearchKeyword}
                            style={MVC.searchBarTextInput}
                        />
                    </View>
                    <TouchableOpacity onPress={this.props.writeDiary}>
                        <Text style={MVC.middleButton}>写日记</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.props.diaryList.length === 0 ?
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18 }}>你还没有写日记</Text>
                        </View> :
                        <ListView
                            dataSource={this.state.diaryListDataSource}
                            renderRow={this.renderListItem}
                        >

                        </ListView>
                }

            </View>
        );
    }
}


//make this component available to the app
export default DiaryList;
