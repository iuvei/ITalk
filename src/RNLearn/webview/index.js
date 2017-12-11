//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, WebView, TouchableOpacity, StatusBar, TextInput } from 'react-native';

// create a component
class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //加载本地网页
            //source={require('./A.html')}
            source: {
                uri:'http://news.sina.com.cn',
            },
            status: 'No Page Loaded',
            backButtonEnabled: false,
            forwardButtonEnabled: false,
        }


        //输入的地址
        this.inputURL = '';
        this.onNavigationStateChange = this.onNavigationStateChange.bind(this);
        this.goBack = this.goBack.bind(this);
        this.goForward = this.goForward.bind(this);
        this.pressGoButton = this.pressGoButton.bind(this);

    }
    /*
    navState：{
        url 当前加载的网页元素
        loading 加载是否完成
        canGoBack
        canGoForward
        title
    }
    */
    onNavigationStateChange(navState) {
        this.setState({
            backButtonEnabled: navState.canGoBack,
            forwardButtonEnabled: navState.canGoForward,
            status: navState.title,
        })
    }
    //回退
    goBack() {
        this.refs.webViewRef.goBack();
    }
    //前进
    goForward() {
        this.refs.webViewRef.goForward();
    }
    //打开用户输入的网址
    pressGoButton() {
        let uri = this.inputURL.toLowerCase();
        if (uri === this.state.source.uri) {
            this.refs.webViewRef.reload();
        } else {
            let source = { uri };
            this.setState({ source })

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <View style={styles.addressBarRow}>
                    <TouchableOpacity
                        style={this.state.backButtonEnabled ? styles.navButton : styles.disabledButton}
                        //回退
                        onPress={this.goBack}>
                        <Text>{'<'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={this.state.forwardButtonEnabled ? styles.navButton : styles.disabledButton}
                        //前进
                        onPress={this.goForward}>
                        <Text>{'>'}</Text>
                    </TouchableOpacity>

                    <TextInput
                        ref='urlInputRef'
                        autoCapitalize='none'
                        defaultValue={''}
                        onSubmitEditing={this.pressGoButton}
                        onChangeText={(text) => { this.inputURL = text }}
                        style={styles.addressBarTextInput}
                    />

                    <TouchableOpacity onPress={this.pressGoButton}>
                        <View style={styles.goButton}>
                            <Text>GO!</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <WebView ref='webViewRef'
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={this.state.source}
                    
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    onNavigationStateChange={this.onNavigationStateChange}
                    startInLoadingState={true}
                />
                <View style={styles.statusBar}>
                    <Text style={styles.statusBarText}>{this.state.status}</Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
    },
    addressBarRow: {
        flexDirection: 'row',
        padding: 8,
    },
    webView: {
        backgroundColor: 'white',
        height: 50,
    },
    addressBarTextInput: {
        backgroundColor: 'white',
        borderColor: 'transparent',
        borderRadius: 3,
        borderWidth: 1,
        height: 24,
        paddingLeft: 10,
        paddingTop: 3,
        paddingBottom: 3,
        flex: 1,
        fontSize: 14,
    },
    navButton: {
        width: 20,
        padding: 3,
        marginRight: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: 'transparent',
        borderRadius: 3,
    },
    disabledButton: {
        width: 20,
        padding: 3,
        marginRight: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        borderColor: 'transparent',
        borderRadius: 3,
    },
    goButton: {
        height: 24,
        padding: 3,
        marginLeft: 8,
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'transparent',
        borderRadius: 3,
        alignSelf: 'stretch'
    },
    statusBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
        height: 22,
    },
    statusBarText: {
        color: 'white',
        fontSize: 13
    }

});

//make this component available to the app
export default Index;
