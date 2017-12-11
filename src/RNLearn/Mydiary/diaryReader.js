//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar, StyleSheet } from 'react-native';
import MVC from './MVC'
// create a component
class DiaryReader extends Component {
    render() {
        return (
            <View style={MVC.container}>
                <StatusBar hidden={true} />
                <View style={MVC.firstRow}>
                    <TouchableOpacity onPress={this.props.returnToDiary}>
                        <Text style={MVC.middleButton}>返回</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.readingPreviousPressed}>
                        <Text style={MVC.middleButton}>上一篇</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.readingNextPressed}>
                        <Text style={MVC.middleButton}>下一篇</Text>
                    </TouchableOpacity>
                </View>
                <View style={MVC.secondRow}>
                    <Image style={MVC.moodStyle} source={this.props.diaryMood} />
                    <View style={MVC.subViewInReader}>
                        <Text style={MVC.textInReader}>{this.props.diaryTitle}</Text>
                        <Text style={MVC.textInReader}>{this.props.diaryTime}</Text>
                    </View>
                </View>
                <TextInput style={[MVC.diaryBodyStyle, { color: 'black' }]}
                    multiline={true}
                    editable={false}
                    value={this.props.diaryBody} />
            </View>
        );
    }
}



//make this component available to the app
export default DiaryReader;
