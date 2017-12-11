//import liraries
import { AsyncStorage } from 'react-native';


let angryMood = require('./images/b6.jpg');
let peaceMood = require('./images/b7.jpg');
let happyMood = require('./images/b8.jpg');
let sadMood = require('./images/qq.png');
let miseryMood = require('./images/b1.jpg');
// create a component
class DataHandler {

    static realDiaryList = [];
    static ListIndex = 0;
    static getAllTheDiary() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getAllKeys().then((Keys) => {
                if (Keys.length === 0) {
                    resolve(DataHandler.realDiaryList);
                    return;
                }
                AsyncStorage.multiGet(Keys).then((results) => {
                    let resultLength = results.length;
                    for (let counter = 0; counter < resultLength; counter++) {

                        DataHandler.realDiaryList[counter] =
                            JSON.parse(results[counter][1]);
                        DataHandler.realDiaryList[counter].mood =
                            DataHandler.dealDiaryMood(DataHandler.realDiaryList[counter].mood);
                        let aTime = DataHandler.dealDiaryTime();
                        DataHandler.realDiaryList[counter].time = aTime.fullTime;
                    }


                    DataHandler.bubleSortDiaryList();//排序
                    resolve(DataHandler.realDiaryList);

                }).catch((error) => {
                    console.log(error);
                    AsyncStorage.clear();
                    resolve(DataHandler.realDiaryList);
                })
            })
        })
    }
    //冒泡排序
    static bubleSortDiaryList() {
        let tempObj;
        for (let i = 0; i < DataHandler.realDiaryList.length; i++) {
            for (let j = 0; j < DataHandler.realDiaryList - i - 1; j++) {
                if (DataHandler.realDiaryList[j].index > DataHandler.realDiaryList[j + 1].index) {
                    tempObj = DataHandler.realDiaryList[j];
                    DataHandler.realDiaryList[j] = DataHandler.realDiaryList[j + 1];
                    DataHandler.realDiaryList[j + 1] = tempObj;
                }
            }
        }
    }
    static getPreViousDiary() {
        if (
            DataHandler.realDiaryList[DataHandler.ListIndex] == undefined ||
            DataHandler.ListIndex < 1
        ) { return null; }
        else {
            DataHandler.ListIndex--;
            return {
                uiCode: 2,
                diaryTime: DataHandler.realDiaryList[DataHandler.ListIndex].time,
                diaryBody: DataHandler.realDiaryList[DataHandler.ListIndex].body,
                diaryTitle: DataHandler.realDiaryList[DataHandler.ListIndex].title,
                diaryMood: DataHandler.realDiaryList[DataHandler.ListIndex].mood,
            }
        }

    }
    static getDiaryAtIndex(aIndex) {
        if (DataHandler.realDiaryList[aIndex] == undefined) return null;

        DataHandler.ListIndex = aIndex;
        return {
            uiCode: 2,
            diaryTime: DataHandler.realDiaryList[aIndex].time,
            diaryBody: DataHandler.realDiaryList[aIndex].body,
            diaryTitle: DataHandler.realDiaryList[aIndex].title,
            diaryMood: DataHandler.realDiaryList[aIndex].mood,
        }

    }

    static getNextDiary() {
        if (
            DataHandler.realDiaryList[DataHandler.ListIndex] == undefined ||
            DataHandler.ListIndex >= (DataHandler.realDiaryList.length - 1)
        ) { return null; }
        else {
            DataHandler.ListIndex++;
            return {
                uiCode: 2,
                diaryTime: DataHandler.realDiaryList[DataHandler.ListIndex].time,
                diaryBody: DataHandler.realDiaryList[DataHandler.ListIndex].body,
                diaryTitle: DataHandler.realDiaryList[DataHandler.ListIndex].title,
                diaryMood: DataHandler.realDiaryList[DataHandler.ListIndex].mood,
            }
        }
    }

    static saveDiary(newDiaryMood, newDiaryBody, newDiaryTitle) {
        return new Promise((resolve, reject) => {
            let time = DataHandler.dealDiaryTime();

            let aDiary = {
                title: newDiaryTitle,
                body: newDiaryBody,
                mood: newDiaryMood,
                time: time.currentTime,
                sectionID: time.yearAndMonth,
                index: Date.parse(time.currentTime),
            }
            AsyncStorage.setItem('' + aDiary.index, JSON.stringify(aDiary)).then(() => {
                let totalLength = DataHandler.realDiaryList.length;
                aDiary.time = time.fullTime;
                DataHandler.realDiaryList[totalLength] = aDiary;
                //--------
                let newMoodIcon = DataHandler.dealDiaryMood(newDiaryMood);

                DataHandler.realDiaryList[totalLength].mood = newMoodIcon;

                let rValue = {
                    diaryList: DataHandler.realDiaryList,
                    uiCode: 1,
                }
                resolve(rValue);
                // AsyncStorage.setItem
            }).catch((error) => {
                console.log(error);
            })
        }).catch((error) => {
            console.log(error);
        })//new Promise((resolve, reject) 
    }
    //-------------
    static dealDiaryTime(timeStr) {
        let cTime = new Date();
        if (timeStr) { cTime = timeStr; }
        let timeString = '' + cTime.getFullYear() + '年' + (cTime.getMonth() + 1) + '月' +
            cTime.getDate() + '日 星期' + (cTime.getDay()) + ' ' + cTime.getHours() + ':' + cTime.getMinutes();
        let result = {
            currentTime: cTime,
            fullTime: timeString,
            yearAndMonth: '' + cTime.getFullYear() + '年' + (cTime.getMonth() + 1) + '月',
        }
        return result;
    }
    static dealDiaryMood(data) {
        let newMoodIcon;
        switch (data) {
            case 1:
                newMoodIcon = angryMood;
                break;
            case 2:
                newMoodIcon = sadMood;
                break;
            case 3:
                newMoodIcon = happyMood;
                break;
            case 4:
                newMoodIcon = miseryMood;
                break;
            default:
                newMoodIcon = peaceMood;
                break;
        }
        return newMoodIcon;
    }

}



//make this component available to the app
export default DataHandler;
/*

*/