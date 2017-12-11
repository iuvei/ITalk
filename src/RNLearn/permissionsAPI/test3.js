//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, CameraRoll, ScrollView, Image } from 'react-native';

// 为用户提供图片选择界面
class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            images: []
        }
        this.fetchParams = { first: 30 }
    }
    componentWillMount() {
        CameraRoll.getPhotos(this.fetchParams).then((data) => {
            const assets = data.edges;
            const images = assets.map((asset) => { asset.node.image })
            this.setState({ images })
        }).catch((error) => { console.log(error) })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.imageGrid}>
                    {
                        this.state.images.map((image) => {
                            <Image style={styles.image} source={{ uri: image.uri }} key={image.uri} />
                        })
                    }
                </View>
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    imageGrid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    image: {
        width: 100,
        height: 100,
        margin: 10
    }
});

//make this component available to the app
export default Index;
