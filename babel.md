title: es6课程
theme: blue
[slide]
# Babel介绍
- Babel 是一个通用的多用途 JavaScript `编译器`
- Babel 把用最新标准编写的 JavaScript 代码向下编译成可以在今天`随处可用`的版本。
[slide]
# babel的安装
- 安装全局的babel
```
npm install --global babel-cli
```
[slide]
# 查看babel的帮助
- babel --help
[slide]
# babel编译文件和文件夹
- 编译单独文件
```
babel a.js --out-file b.js
# 或
$ babel a.js -o b.js
```
- 输出文件夹
```
$ babel src --out-dir build
# 或
$ babel src -d build
```
[slide]
# 使用本地babel
- 安装babel
    ```
    npm install --save-dev babel-cli
    ```
- 在package.json中使用本地babel
[slide]
# 配置babel
- 创建.babelrc文件
- 安装常用的预设
- 解析es6
    ```
     npm install --save-dev babel-preset-es2015
    ```
- 解析react
    ```
     npm install --save-dev babel-preset-react
    ```
- 解析es7的不同版本
    ```
     npm install --save-dev babel-preset-stage-x
    ```
[slide]

# babel生成代码
- 转换新的API,babel-polyfill
- 安装babel-polyfill
    ```
    npm install --save babel-polyfill
    ```
    ```
    import "babel-polyfill";
    ```
[slide]
# 保持生成代码的整洁
- 安装babel-runtime
    ```
    npm install --save-dev babel-plugin-transform-runtime
    npm install --save babel-runtime
    ```
- 配置.babelrc
    ```
     {
        "plugins": [
          "transform-runtime",
        ]
      }
    ```
[slide]
# 手动指定配置
- 设置配置
```
npm install --save-dev babel-plugin-transform-es2015-classes
```
```
 {
    "plugins": [
     ["transform-es2015-classes", { "loose": true }]
    ]
  }
```