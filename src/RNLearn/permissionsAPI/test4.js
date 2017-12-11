//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, CameraRoll, Platform } from 'react-native';

let postServerUri = 'http://192.168.2.105:8888/upload';

//POST 上传图片
class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            image: null
        }
        this.fetchParams = { first: 10 }
    }

    componentWillMount() {
        CameraRoll.getPhotos(this.fetchParams).then((data) => {
            let image = null;
            let maxcounter = data.edges.length;
            for (let i = 0; i < maxcounter; i++) {
                let nameLen = data.edges[i].node.image.filename.length;
                let extname = data.edges[i].node.image.filename.subString(nameLen - 3);
                if(extname==='JPG'){
                    image= data.edges[i].node.image;
                    break;
                }else{
                    if(data.edges[i].node.type ==='image/jpeg'){
                        image= data.edges[i].node.image;
                        break;
                    }
                }
            }

            if(image===null){
                console.log('不存在jpg图片');
                return;
            }
            if(Platform.OS==='IOS'){ image.filename='b.jpg'}
            this.setState({image})
            let body=new FormData();
            body.append('photo',{
                uri:image.uri,
                name:image.filename,
                type:'image/jpeg'
            })

            body.append('Content-Type','image/jpg');
            let aObj={
                method:'POST',
                headers:{'Content-Type':'multipart/form-data'},
                body:body
            }
            fetch(postServerUri,aObj).then((result)=>{
                console.log(result)
            }).catch((error)=>{console.log(error)})
        }).catch((error)=>{console.log("获取图片时发生错误 "+error)})
    }

    render() {
        return (
            <View style={styles.container}>
               <Image style={styles.imagesStyle} source={this.state.image}/>
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
    imagesStyle:{
        width:300,
        height:500
    }
});

//make this component available to the app
export default Index;
