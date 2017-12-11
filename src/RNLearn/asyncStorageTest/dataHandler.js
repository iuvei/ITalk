import { AsyncStorage } from 'react-native'
export default class DataHandler {


    static saveData(data) {
        return new Promise((resolve, reject) => {
            AsyncStorage.setItem(data.key, JSON.stringify(data)).then(() => {
                resolve("保存成功");
            }).catch((error) => {
                console.log(error);
                resolve(error);
            });
        })

    }
    static getDataByKey(key) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(key).then((result) => {
                if (result === null) { resolve(null) }
                else { resolve(result) }
            }).catch((error) => {
                console.log(error)
                resolve(error);
            })
        })
    }
    static getAllData() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getAllKeys().then((Keys) => {
                let arrayLength = Keys.length;
                if (arrayLength === 0) { return null; }
                else {
                    resolve(Keys);
                    // for(let counter=0;counter<arrayLength;counter++){
                    //     AsyncStorage.getItem(Keys[counter]).then((result)=>{
                    //         resolve(result)
                    //     }).catch((error) => { console.log(error); })
                    // }
                }
            }).catch((error) => { console.log(error); })
        }).catch((error) => { console.log(error); })
    }
    static clearData(){
        AsyncStorage.clear();
    }
}