//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ToastAndroid, Alert,AsyncStorage } from 'react-native';

import DiaryList from './diaryList'
import DiaryReader from './diaryReader'
import DiaryWriter from './diaryWriter'
import DataHandler from './dataHandler'

// create a component
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uiCode: 1,
            diaryList: [],
            diaryMood: null,
            diaryTime: '读取中...',
            diaryTitle: '读取中...',
            diaryBody: '读取中...',
        }
        this.bindAllMyFunction();
        AsyncStorage.clear();
        DataHandler.getAllTheDiary().then((result) => {
            this.setState({ diaryList: result })
        }).catch((err) => { console.log(err) });
    }
    bindAllMyFunction() {
        this.selectLististItem = this.selectLististItem.bind(this);
        this.writeDiary = this.writeDiary.bind(this);
        this.returnPressed = this.returnPressed.bind(this);
        this.saveDiaryAndReturn = this.saveDiaryAndReturn.bind(this);
        this.readingPreviousPressed = this.readingPreviousPressed.bind(this);
        this.readingNextPressed = this.readingNextPressed.bind(this);
    }

    readingPreviousPressed() {
        let previousDiary = DataHandler.getPreViousDiary();
        if (previousDiary === null) return;

        this.setState(previousDiary);
    }
    readingNextPressed() {
        let nextsDiary = DataHandler.getNextDiary();
        if (nextsDiary === null) return;

        this.setState(nextsDiary);
    }

    returnPressed() {
        this.setState({ uiCode: 1 })
    }

    saveDiaryAndReturn(diaryMood, diaryBody, diaryTitle) {
        DataHandler.saveDiary(diaryMood, diaryBody, diaryTitle).then((result) => {
            ToastAndroid.show("保存成功", ToastAndroid.SHORT);
            this.setState(result);
        }).catch((error) => { console.log(error) })

    }
    writeDiary() {
        this.setState({ uiCode: 3 })
    }

    searchKeyword(keyword) {
        console.log("搜索的关键字" + keyword);
    }
    selectLististItem(aIndex) {
        let rValue = DataHandler.getDiaryAtIndex(aIndex);
        this.setState(rValue);
    }

    showDiaryList() {
        return (
            <DiaryList
                fakeListTitle={this.state.diaryTitle}
                fakeListTime={this.state.diaryTime}
                fakeListMood={this.state.diaryMood}
                //fakeListBody={this.state.diaryBody}
                selectLististItem={this.selectLististItem}
                searchKeyword={this.searchKeyword}
                writeDiary={this.writeDiary}
                diaryList={this.state.diaryList}
            />
        );
    }
    showDiaryWriter() {
        return (<DiaryWriter
            returnPressed={this.returnPressed}
            saveDiary={this.saveDiaryAndReturn}
        />);
    }
    showDiaryReader() {
        return (<DiaryReader
            returnToDiary={this.returnPressed}
            diaryTitle={this.state.diaryTitle}
            diaryMood={this.state.diaryMood}
            diaryTime={this.state.diaryTime}
            readingPreviousPressed={this.readingPreviousPressed}
            readingNextPressed={this.readingNextPressed}
            diaryBody={this.state.diaryBody}
        />);
    }

    render() {
        if (this.state.uiCode === 1) { return this.showDiaryList(); }
        if (this.state.uiCode === 2) { return this.showDiaryReader(); }
        if (this.state.uiCode === 3) { return this.showDiaryWriter(); }

    }
}

//make this component available to the app
export default Index;
