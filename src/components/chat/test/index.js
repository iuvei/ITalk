//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Backend from './backend'

export default class Example extends React.Component {
    static propTypes={
        name:PropTypes.string,
    }
    static defaultProps={
        name:'huhao'
    }

    state = {
        messages: [],
    };

    componentWillMount() {
        /*
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    },
                },
            ],
        });
        */
    }
    componentDidMount(){
        Backend.loadMessage((message)=>{
            this.setState((previousState)=>{
                return {
                    message:GiftedChat.append(previousState.messages,message)
                };
            });
        });
    }
    componentWillUnmount(){
        Backend.closeChat();
    }

    onSend(messages = []) {
        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }));
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={(messages) => Backend.sendMessage(messages)}
                user={{
                    _id: Backend.getUid(),
                    name: this.props.name ? this.props.name : '请叫我大王'
                }}
            />
        );
    }

}
