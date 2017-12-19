react-native init AwesomeProject
cd AwesomeProject
react-native run-android

# 重大建议，所有命令使用yarn,不再使用npm命令

npm install  => yarn install或yarn
npm install --save [package] => yarn add [package]
npm install --save-dev [package] => yarn add [package] --dev
npm install --global [package] => yarn global add [package]
npm uninstall --save [package] => yarn remove [package]
npm uninstall --save-dev [package] => yarn remove [package]


###  1. yarn start  只启动后台

### 2. react-native run-android  启动后台，也启动页面

### 3.react-devtools  启动调试工具

dependencies 依赖包
peer-dependencies 同等的依赖包
bundled-dependencies 捆绑依赖包
develop-dependencies 开发依赖包
optional-dependencies 可选择的依赖包


#### 日常报错
- 
`
To resolve try the following:
  1. Clear watchman watches: `watchman watch-del-all`.
  2. Delete the `node_modules` folder: `rm -rf node_modules && npm install`.
  3. Reset Metro Bundler cache: `rm -fr $TMPDIR/react-*` or `npm start -- --reset-cache`.
`
网上的解决
`
		"rc-start": "npm start -- --reset-cache",
		"clean": "rm -rf $TMPDIR/react-* && watchman watch-del-all && npm cache clean",
		"clean-start": "npm run clean && npm run rc-start",
		"fresh-install": "rm -rf $TMPDIR/react-* && watchman watch-del-all && rm -rf ios/build/ModuleCache/* && rm -rf node_modules/ && npm cache clean && npm install",
		"fresh-start" : "npm run fresh-install && npm run rc-start",
		"tron": "node_modules/.bin/reactotron"
`
npm版本5 的清除缓存命令:npm cache verify
之前的版本才是:npm cache clean


##### 清除项目缓存，重新编译
My 50cents. Windows and Android version (from react-native root project)
del %appdata%\Temp\react-native-* & cd android & gradlew clean & cd .. & del node_modules/ & npm cache clean --force & npm install & npm start -- --reset-cache

or

del %appdata%\Temp\react-native-* & cd android & gradlew clean & cd .. & del node_modules/ & npm cache clean --force & yarn install & react-native run-android




react-native-vector-icons