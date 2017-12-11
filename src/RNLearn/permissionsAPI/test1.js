//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, CameraRoll } from 'react-native';

// 获取手机中所有图片
class Index extends Component {

    componentWillMount() {
        this.fetchParams = { first: 50 };
        CameraRoll.getPhotos(this.fetchParams).then((data) => {
            this.getPhotoResults(data);
        }).catch((error) => { console.log(error) })
    }

    logError(error) {
        console.log('logError' + error);
    }

    getPhotoResults(data) {
        let assets = data.edges;
        let len = assets.length;
        let asset;
        for (let i = 0; i < len; i++) {
            asset = assets[i].node;
        }
        console.log(asset);

        if (!data.page_info.has_next_page) {
            console.log('已经获取所有图片');
            return;
        }
        this.fetchParams = { first: 50, after: data.page_info.end_cursor };
        console.log('获取下50张图片');
        CameraRoll.getPhotos(this.fetchParams).then((data) => {
            this.getPhotoResults(data);
        }).catch((error) => {
            console.log(error);
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>Index</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Index;
