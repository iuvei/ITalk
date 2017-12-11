//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

// create a component
class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            aSwitch: true
        }
        this.onSwitchChange = this.onSwitchChange.bind(this);
    }
    onSwitchChange() {
        this.setState({ aSwitch: !this.state.aSwitch })
    }

    render() {
        return (
            <View style={styles.container}>
                <Switch
                    style={{ margin: 20 }}
                    onValueChange={this.onSwitchChange}
                    value={this.state.aSwitch} />

                <Switch
                    style={{ margin: 20 }}
                    onValueChange={this.onSwitchChange}
                    value={!this.state.aSwitch} />
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
