//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, CameraRoll,Image } from 'react-native';

// 显示从CameraRoll API  得到的图片
class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            image: null
        }
        this.fetchParams = { first: 1 }
    }
    componentWillMount() {
        CameraRoll.getPhotos(this.fetchParams).then((data) => {
            let image = data.edges[0].node.image;
            this.setState({ image })
        }).catch((error) => { console.log(error) })
    }

    render() {
        return (
            <View style={styles.container}>
               <Image style={styles.imageStyle} source={this.state.image}/>
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
        backgroundColor: '#F5FCFF',
    },
    imageStyle:{
        height:500,
        width:300
    }
});

//make this component available to the app
export default Index;
