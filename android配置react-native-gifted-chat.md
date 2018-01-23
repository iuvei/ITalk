### 安装
Using npm: npm install react-native-gifted-chat --save
或
Using Yarn: yarn add react-native-gifted-chat

### Android的注意事项
如果您正在使用Create React Native App / Expo，则不需要安装特定的安装步骤 - 您可以跳过本节。 否则，我们建议如下修改您的项目配置。

- 1. 确保你的AndroidManifest.xml中有android：windowSoftInputMode =“adjustResize”：
```
<activity
  android:name=".MainActivity"
  android:label="@string/app_name"
  android:windowSoftInputMode="adjustResize"
  android:configChanges="keyboard|keyboardHidden|orientation|screenSize">
```

- 2. 对于Expo来说，解决这个问题几乎有两个解决方案：

- (1)GiftedChat后添加KeyboardAvoidingView
- (2)在app.json上添加一个不透明的背景状态栏(https://docs.expo.io/versions/latest/guides/configuration.html#androidstatusbar)

- (3) If you plan to use GiftedChat inside a Modal, see #200.(https://github.com/FaridSafi/react-native-gifted-chat/issues/200)

### 本地开发的注意事项

您可以使用wml来保持示例应用程序与您在开发期间对库进行的任何更改同步。 步骤：
1. Install it: npm install -g wml
2. Configure it: `wml add . example/node_modules/react-native-gifted-chat` from the root directory
3. `cd example`
4. ` npm start`
5. `wml start` in another terminal window (doesn't matter where)
WML开始在另一个终端窗口（无所谓在哪里）

请注意，在启动npm后wml start会很重要，否则您将无法找到入口文件index.js错误。 如果您有任何问题，可以使用watchman-del-all清除手表，然后重试。


### 新建chat.js 复制以下内容
```
import { GiftedChat } from 'react-native-gifted-chat'

class Example extends React.Component {
  state = {
    messages: [],
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
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}
```    