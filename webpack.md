title: angularjs
theme: blue

[slide]

# Webpack简介

Webpack是一款用户打包前端模块的工具。主要是用来`打包`在浏览器端使用的javascript的。同时也能转换、捆绑、打包其他的静态资源，包括`css、image、font file、template`等，并且支持AMD/CMD

[webpack官网](http://webpack.github.io) [slide]

# Webpack的安装

- 初始化`package.json` {:&.moveIn}
- 安装webpack

  ```
    //全局安装  
    npm install -g webpack
  ```

  ```
    //本地安装
    npm install webpack --save-dev
  ```

  [slide]

  # 打包命令

- webpack命令 {:&.moveIn}

  ```
    webpack 入口文件 出口文件
  ```

[slide]

# webpack应用

- webpack 开发环境下编译
- webpack -p 产品编译及压缩
- webpack --watch 开发环境下持续的监听文件变动来进行编译(非常快!)
- webpack -d 引入 source maps
- webpack --progress 显示构建进度
- webpack --display-error-details 这个很有用，显示打包过程中的出错信息
- webpack --profile 输出性能数据，可以看到每一步的耗时 [slide]

# 加载器

- css加载器 {:&.moveIn}
- 安装:style-loader&css-loader

  ```
    //处理css
    npm install style-loader css-loader less-loader --save-dev
  ```

[slide]

# webpack配置

```
         entry: 入口文件 Object/string
    output: 配置打包结果object
    path：定义输出文件路径
    file：指定打包文件名称
    module：对模块的处理
    loaders:[
        {   
            test：正则,
            loader/loaders: string|Array,
            include:String|Array,
            exclude:String|Array,
        }
        {
            test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000"
        }
    ],
    plugins:[],
    resolve:{
      extensions:['','.js','.css','.jsx']
    },
```
[slide]
# 处理图片

- 图片加载base64
- 安装:url-loader,file-loader

  ```
    //处理图片
    npm install url-loader file-loader --save-dev
  ```

  [slide]

  # 多文件入口

- 配置多入口文件 {:&.moveIn}

  ```
  entry: {
            entry1: './src/entry1.js',
            entry2: './src/entry2.js',
  }
  ```

  [slide]

  # alias 配置别名& extensions去掉扩展名

  ```
  resolve: {
      extensions: ["", ".js", ".jsx", ".css", ".json"],
      alias: {   
        'abc':path,
      }
  }
  ```

  [slide]

  # 自动刷新

- 需要去更改html页面上的文件 内存中打包 不是io读写 {:&.moveIn}

  ```
    //全局安装
    npm install webpack-dev-server -g
  ```

  ```
    //本地安装
    npm install webpack-dev-server --save-dev
  ```

  ```
    //实现动态加载
    webpack-dev-server --inline //更改端口 --port

    entry: [
          'webpack-dev-server/client?http://localhost:3000',
           path.resolve(__dirname, 'src/index.js')
    ],
  ```

[slide]

# webpack-dev-server参数配置

- webpack-dev-server - 在 localhost:8080 建立一个 Web 服务器
- webpack-dev-server --devtool eval - 为你的代码创建源地址。当有任何报错的时候可以让你更加精确地定位到文件和行号
- webpack-dev-server --progress - 显示合并代码进度
- webpack-dev-server --colors - 命令行中显示颜色
- webpack-dev-server --content-base build - webpack-dev-server服务会默认以当前目录伺服文件，如果设置了content-base的话，服务的根路径则为build目录
- webpack-dev-server --inline 可以自动加上dev-server的管理代码，实现热更新
- webpack-dev-server --hot 开启代码热替换，可以加上HotModuleReplacementPlugin
- webpack-dev-server --port 3000 设置服务端口 [slide]

  # devServer

```
devServer: {
      publicPath: "/static/",
      stats: { colors: true },
      port: 8080,
      contentBase: 'build',
      inline: true
    },
```


[slide]

# 自动生成HTML

- 安装:html-webpack-plugin {:&.moveIn}

  ```
     npm install html-webpack-plugin --save-dev
  ```

  ```
        new htmlWebpackPlugin({
          title:"欢迎",
          filename:'class.html',
          chunks:["abc"]
  })
  ```

[slide]

# 启动浏览器

- 自动打开浏览器

  ```
    npm install open-browser-webpack-plugin --save-dev
  ```

  ```
    new openBrowserWebpackPlugin({url:http://localhost:8080})
  ```

  [slide]

# 文件单独加载

- 安装:extract-text-webpack-plugin {:&.moveIn}

  ```
     npm install extract-text-webpack-plugin --save-dev
  ```

  ```
    var ExtractTextPlugin = require("extract-text-webpack-plugin");
  ```

  ```
  {
      test: /\.css/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
  },
  {
      test: /\.less/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
  }
  ```

- 打包生成的css文件名

  ```
    new ExtractTextPlugin("bundle.css");
  ```

  [slide]

  # 分离并抽取

- 提取出应用中公共的代码 {:&.moveIn}

  ```
     new webpack.optimize.CommonsChunkPlugin('common.js');
  ```

[slide]

# 添加hash值

- 通过`?[hash]`进行添加hash后缀 {:&.moveIn}  


[slide]
# 文件的压缩

- 实现压缩代码 {:&.moveIn}

  ```
  new  webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  ```

  ```
  // 查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
  new webpack.optimize.DedupePlugin(),
  // 按引用频度来排序 ID，以便达到减少文件大小的效果
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1.5,
      moveToParents: true
  })
  ```
  
[slide]

  # 编译es6

- 安装编译器和加载器 {:&.moveIn}

  ```
    npm install --save-dev babel-preset-es2015
  ```

  ```
    npm install --save-dev babel-loader
    //对js进行加载
    {test:/\.js$/,loader:"babel-loader"}
  ```

  ```
    npm install --save babel-polyfill
  ```

  ```
    //导入polyfill
    import "babel-polyfill";
  ```

- 创建.babelrc 进行编译

  ```
    {
      "presets":["es2015"]
    }
  ```

[slide]

# es中的模块化

- 模块的导出 `export` {:&.moveIn}

  - export var firstName = 'jw';
  - export{Btn as b, firstName,fn, }
  - export default function (){}

- 模块的导入 `import` import {firstName} from './a.js'; import * as util from './a.js'; import {filename,fn} from './a.js'; [slide]

  # 代码调试

  ```
  devtool: 'cheap-module-source-map'
  ```





# proxy

```
function rewriteUrl(replacePath) {
  return function (req, opt) {
    var queryIndex = req.url.indexOf('?');
    var query = queryIndex >= 0 ? req.url.substr(queryIndex) : "";

    req.url = req.path.replace(opt.path, replacePath) + query;
    console.log("rewriting ", req.originalUrl, req.url);
  };
}
```

```
proxy: [
          {
            path: /^\/api\/(.*)/,
            target: "http://localhost:8080/",
            rewrite: rewriteUrl('/$1\.json'),
            changeOrigin: true
          }
      ]
```
