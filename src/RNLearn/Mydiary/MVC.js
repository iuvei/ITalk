import {StyleSheet,Dimensions, } from 'react-native'

let totalWidth =Dimensions.get('window').width;
let totalHeigth=Dimensions.get('window').height;
let textSize=totalWidth/18;

let readingUITitleHeight=textSize*6;

let diaryBodyLine=totalHeigth/textSize-6;

let returnButtonHeight=textSize*5;


const MVC = StyleSheet.create({
    container:{
        top:2,
        flex:1,

        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF',
        borderColor:'black',
        borderWidth:1,
    },
    firstRow:{
        height:textSize*1.4+2,
        flexDirection:'row',
        width:totalWidth-4,
        justifyContent:'space-around',
        margin:2,
    },
    longButton:{
        height:textSize*1.4,
        backgroundColor:'gray',
        width:textSize*10,
        borderRadius:8,
        textAlign:'center',
        fontSize:textSize,
    },
    middleButton:{
        height:textSize*1.4,
        backgroundColor:'gray',
        width:textSize*5,
        borderRadius:8,
        textAlign:'center',
        fontSize:textSize,
    },
    diaryAbstractList:{
        flex:1,
        margin:4,
        width:totalWidth-4,
        justifyContent:'center',
        backgroundColor:'grey',
    },
    diaryBodyStyle:{
        flex:1,
        width:totalWidth-8,
        fontSize:textSize,
        backgroundColor:'grey',
        margin:4,
    },
    smallButton:{
        height:textSize*1.4,
        backgroundColor:'gray',
        width:textSize*3,
        borderRadius:8,
        textAlign:'center',
        fontSize:textSize
    },
    moodStyle:{
        height:textSize*3.2,
        width:textSize*3.2,
        borderRadius:textSize*1.6,
    },
    subViewInReader:{
        width:totalWidth-5-textSize*3.2,
    },
    textInReader:{
        height:textSize*1.4,
        fontSize:textSize,
        backgroundColor:'grey',
        margin:2,
    },
    secondRow:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'grey',
        borderRadius:4,
        margin:1,
    },
    titleInputStyle:{
        fontSize:textSize,
        backgroundColor:'grey',
        height:textSize*2.4,
        color:'black',
        margin:4,
        borderWidth:2,
        width:totalWidth-12,
        borderColor:'black',
    },
    searchBarTextInput:{
        backgroundColor:'white',
        borderColor:'black',
        //borderWidth:1,
        height:textSize*1.4,
        width:textSize*10,
        paddingTop:0,
        paddingBottom:0,
        // top:1,
        // left:1,
        fontSize:14,
    }


})

export default MVC;