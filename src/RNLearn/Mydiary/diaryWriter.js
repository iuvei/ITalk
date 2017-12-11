//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';

let angryMood = require('./images/b6.jpg');
import MVC from './MVC'
// create a component
class DiaryWriter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            moodText: '心情',
        }
        this.diaryTitle = null;
        this.diaryBody = null;
        this.moodCode = 0;

        this.returnPressed = this.returnPressed.bind(this);
        this.selectedMood = this.selectedMood.bind(this);
        this.saveDiary = this.saveDiary.bind(this);
    }
    returnPressed() {
        Alert.alert(
            '请确认',
            '确定返回日记列表么?',
            [
                { text: '确定', onPress: this.props.returnPressed },
                { text: '取消' },
            ]
        )
    }
    selectedMood() {
        let tempString;
        if (this.moodCode === 5) {
            this.moodCode = 1;
        } else {
            this.moodCode = this.moodCode + 1;
        }
        switch (this.moodCode) {
            case 1:
                tempString = '平静';
                break;
            case 2:
                tempString = '愤怒';
                break;
            case 3:
                tempString = '悲伤';
                break;
            case 4:
                tempString = '高兴';
                break;
            case 5:
                tempString = '痛苦';
                break;
            default:
                break;
        }
        this.setState({ moodText: tempString })
    }
    saveDiary() {
        if (this.moodCode == 0 || this.diaryTitle === null || this.diaryBody === null) {
            Alert.alert(
                '出错了',
                '心情必选,标题,内容必填',
                [{ text: '我知道了' }]
            )
        } else {
            if (this.props.saveDiary) {
                this.props.saveDiary(this.moodCode, this.diaryBody, this.diaryTitle);
            }
        }

    }

    render() {
        return (
            <View style={MVC.container}>
                <StatusBar hidden={true} />
                <View style={MVC.firstRow}>
                    <TouchableOpacity onPress={this.returnPressed}>
                        <Text style={MVC.smallButton}>
                            返回
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.selectedMood}>
                        <Text style={MVC.smallButton}>
                            {this.state.moodText}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.saveDiary}>
                        <Text style={MVC.smallButton}>
                            保存
                        </Text>
                    </TouchableOpacity>
                </View>
                <TextInput style={MVC.titleInputStyle}
                    placeholder='请填写日记标题'
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => { this.diaryTitle = text }}
                />
                <TextInput style={MVC.diaryBodyStyle}
                    placeholder='请填写日记内容'
                    onChangeText={(text) => { this.diaryBody = text }}
                    multiline={true} />
            </View>
        );
    }
}

//make this component available to the app
export default DiaryWriter;
