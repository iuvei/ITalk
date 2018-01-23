#### Android配置react-native-vector-icons

##### 选项：使用Gradle（推荐）

这种方法的优点是在编译时从这个模块中复制字体，这样字体和JS总是同步的，使得升级变得轻松。

编辑android / app / build.gradle（不是android / build.gradle）并添加以下内容：
```
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

要自定义正在复制的文件，请添加以下内容：
```
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```
##### 选项：手动
将字体文件夹中的内容复制到android / app / src / main / assets / fonts（注意小写字体文件夹）。
为getImageSource和ToolbarAndroid支持集成库

这些步骤是可选的，只有在您要使用Icon.getImageSource函数或使用Icon.ToolbarAndroid组件中的自定义图标时才需要。
- 编辑android / settings.gradle看起来像这样（没有+）：
```
rootProject.name = 'MyApp'

include ':app'

+ include ':react-native-vector-icons'
+ project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
```
- 编辑android / app / build.gradle（注：app文件夹）如下所示：
```
apply plugin: 'com.android.application'

android {
  ...
}

dependencies {
  compile fileTree(dir: 'libs', include: ['*.jar'])
  compile "com.android.support:appcompat-v7:23.0.1"
  compile "com.facebook.react:react-native:+"  // From node_modules
+ compile project(':react-native-vector-icons')
}
```

- 编辑你的MainApplication.java（深入android / app / src / main / java / ...）看起来像这样（注意两个地方编辑）：

```
package com.myapp;

+ import com.oblador.vectoricons.VectorIconsPackage;

....

  @Override
  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
      new MainReactPackage()
+   , new VectorIconsPackage()
    );
  }

}
```

##### 注意：如果您使用React Native（Android）<= 0.17，请按照此说明进行操作--超链接
https://github.com/oblador/react-native-vector-icons/blob/2fe5b97afa849652215e3258189e8ca3ea775c53/README.md#integrating-library-for-getimagesource-support

#### 选项：使用rnpm
```
$ react-native link
```
注意：有些用户在使用这种方法时遇到了麻烦，如果您也是其他用户，请尝试使用其他方法。
