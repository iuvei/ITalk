import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View, TextInput } from 'react-native';
import { Picker, List, WhiteSpace, NavBar, Icon, Button, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';
import { district, provinceLite as province } from 'antd-mobile-demo-data';

class Login extends Component {
    static navigationOptions = {
        title: '返回',
        headerTintColor: 'blue',


    }
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            cols: 1,
            pickerValue: [],
            asyncValue: [],
            sValue: ['2013', '春'],
            visible: false,
        };
    }
    onPickerChange = (val) => {
        console.log(val);
        let colNum = 1;
        const d = [...this.state.data];
        const asyncValue = [...val];
        if (val[0] === 'zj') {
            d.forEach((i) => {
                if (i.value === 'zj') {
                    colNum = 2;
                    if (!i.children) {
                        i.children = [{
                            value: 'zj-nb',
                            label: '宁波',
                        }, {
                            value: 'zj-hz',
                            label: '杭州',
                        }];
                        asyncValue.push('zj-nb');
                    } else if (val[1] === 'zj-hz') {
                        i.children.forEach((j) => {
                            if (j.value === 'zj-hz') {
                                j.children = [{
                                    value: 'zj-hz-xh',
                                    label: '西湖区',
                                }];
                                asyncValue.push('zj-hz-xh');
                            }
                        });
                        colNum = 3;
                    }
                }
            });
        } else {
            colNum = 1;
        }
        this.setState({
            data: d,
            cols: colNum,
            asyncValue,
        });
    }

    render() {
        const { getFieldProps } = this.props.form;
        return (
            <View style={styles.container}>
                <Text style={styles.maxFont}>输入手机号码</Text>
                <Text>注册即代表并同意<Text>使用条款</Text>和<Text>隐私政策</Text></Text>
                <Picker data={district} cols={1}
                    {...getFieldProps('district3') }
                    className="forss">
                    <List.Item arrow="horizontal">地区</List.Item>
                </Picker>

                <InputItem
                    {...getFieldProps('money3') }
                    type={'money'}
                    placeholder="请输入电话号码"
                    clear
                    moneyKeyboardAlign="left"
                >86+</InputItem>
                <Button type="primary">下一步</Button>
            </View>
        );
    }
}
const Login1 = createForm()(Login);

export default Login1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    maxFont: {
        fontSize: 28,
    }

})