//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

// create a component
class Index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: [],
      typingText: 'React Native is typing',
    }

    this.renderFooter = this.renderFooter.bind(this);
  }
  componentWillMount() {
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
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }
  //------
  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {this.state.typingText}
          </Text>
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        renderFooter={this.renderFooter}
        user={{
          _id: 1,
        }}
      />

    );
  }
}
const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
});

//make this component available to the app
export default Index;
