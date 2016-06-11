title: angularjs
theme: blue
[slide]
## AngularJs核心特性
- 双向数据绑定 `model`变化，`view`也变化
- 模版 将html文件`解析`到DOM中
- MVVM Model-View-ViewModel
- `模块化`与`依赖注入`
- 指令可以用来`创建自定义的标签`，也可以用来`装饰元素`或者`操作DOM`属性。
[slide]
# 为什么用angular
- 前后端分离,后端提供数据接口
- html和js分离
- 减少js代码,减少DOM元素查找，事件绑定等代码

[slide]
# AngularJs的使用
- 引入angularJs
    - 通过npm进行下载
    ```
      npm install angular
    ```
    - 使用bower下载angular.js
    ```
      bower install angular
    ```
- ng-app(rootScope->ngapp)
- ng-app 指令在网页加载完毕时会自动引导(自动初始化)应用程序
[slide]
# 初识ng-model
- ng-app里面的所有的内容都归angular来管
- 将ng-model生成数据模型然后挂在rootScope上
- 实现model和view的双向绑定(变量和视图进行绑定)
[slide]
# 表达式
- {{}} 两个花括号{{}}组成，可以把数据绑定到HTML
- 可以用来做表达式结果
- 可以使用三元表达式
[slide]
# 数据绑定
- ng-bind 显示数据类似于 {{}} 防止用户看到被渲染之前的样子
- ng-non-bindable 取消绑定html
- ng-bind-template 解决 ng-bind 中只能绑定一个的问题
    ```
    <div ng-bind-template="{{name}} {{age}}"></div>
    ```
[slide]
# ng-init
- ng-init 指令为 AngularJS 应用程序定义了 初始值。  
- 不仅可以赋值字符串,也可以赋值数字,数组,对象
> 通常情况下,不使用 ng-init。使用一个控制器或模块来代替它。
[slide]
# data-指令 
- data-ng-init 与 ng-init 等价
[slide]
# ng-repeat遍历
- 会创建自己的作用域
- 不仅能遍历数组还能遍历对象
```
<div ng-init="phones=[{name:[{a:1}]},{name:[{a:1}]}]">
    <div ng-repeat="phone in phones" ng-init="c=$index">
        <div ng-repeat="a in phone.name" ng-init="b=$index">
           {{c}}{{b}}
        </div>
    </div>
</div>
```
- 遍历数组需注意track by $index
[slide]
# ng-click
- 显示隐藏/效果
[slide]
# ng-hide/ng-show/ng-if
- 布尔类型 为true执行内部指令，为false时不执行内部指令
- ng-if为false时候内部节点消失
[slide]
# ng-switch  
```
<input type="text" ng-model="name">
<div ng-switch="name">
    <p ng-switch-when="by">123</p>
    <p ng-switch-when="hello">456</p>
    <p ng-switch-when="girl">789</p>
    <p ng-switch-default>10000</p>
</div>
```
[slide]
# 增加class值
- ng-class ="{true:'',false:''}[isActive]";
- ng-class ="{'selected':isSelected}";
- ng-style ="{color:'red'}";
- 示例1 弹出框
```
<div class="alert" ng-class="{'alert-success':success=='alert-success','alert-info':success=='alert-info'}">...</div>
```
- 示例2 导航切换
```
<ul class="nav nav-tabs">
    <li role="presentation" ng-click="click='Home'" ng-class="{active:click=='Home'}"><a href="">Home</a></li>
    <li role="presentation" ng-click="click='Profile'" ng-class="{active:click=='Profile'}"><a href="">Profile</a></li>
    <li role="presentation" ng-click="click='Messages'" ng-class="{active:click=='Messages'}"><a href="">Messages</a></li>
</ul>
```
[slide]
# 引入页面
- ng-include 加载外部页面
[slide]
# currency 货币过滤器
```
{{100 | currency:'￡' }}
```
[slide]
# lowercase & uppercase 大小写转换过滤器
```
{{'abc' | uppercase }}
```

```
{{'ABC' | lowercase }}
```

[slide]
# limitTo 限制位数
```
{{123456 | limitTo:5}}
```
[slide]
# number 数字过滤器
```
{{1234.2345|number:2}}
```
[slide]
# json 对象过滤器
```
<pre>
{{{aa:123,bb:456} | json}}
</pre>
```
[slide]
# date 日期过滤器
```
{{1654325689063 | date:'yyyy-MM-dd hh:mm:ss'}}
```
[slide]
#  orderBy
```
    <div ng-repeat="p in phones | orderBy:'-age':'reverse'">
        {{p.name}}
    </div>
```
[slide]
# filter 查询过滤器
```
<div ng-repeat="p in phones | filter:{age:query}">
    {{p.name}}
</div>
```
[slide]
# angular工具方法
- angular.uppercase 
- angular.lowercase 
- angular.equals 
- angular.extend 
- angular.fromJson 
- angular.toJson 
- angular.copy
- angular.forEach 
- angular.bind 
[slide]
# angular.uppercase&&angular.lowercase 
```
var abc = angular.uppercase("aaaa");
console.log(abc);
var abc = angular.lowercase("aaaa");
console.log(abc);
```
[slide]
# angular.equals
```
var a = angular.equals(NaN,NaN);
console.log(a);
```
[slide]
# angular.extend
```
var obj = {a:123},obj1 = {b:456};
angular.extend(obj,obj1);
console.log(obj);
```
[slide]
# angular.fromJson&&angular.toJson
```
var obj = '{"aa":123,"bb":456}';
var a =angular.fromJson(obj);
a = angular.toJson(a);
console.log(a);
```
[slide]
# angular.copy
```
var obj = {a:123},obj1 = {b:456};
angular.copy(obj,obj1);
console.log(obj1);
```
[slide]
# angular.forEach 
```
var arr = [{name:1},{name:2},{name:3}];
var result = [];
angular.forEach(arr,function (item) {
    this.push(item.name);
},result);
```
[slide]
# angular.bind 
```
var obj = {name:2};
function arr(who){console.log(this.name+who);}
var newArr =  angular.bind(obj,arr,1);
newArr();
```
[slide]
# AngularJs MVC
- Model:数据`模型`层 
- View:`视图`层,负责展示 
- Controller:业务逻辑和`控制`逻辑
> MVC只是手段，目标是模块化和复用
[slide]
# 模块化(解决污染全局命名空间)
- 一切从模块开始
 angular.module(name, [requires], [configFn]);
   - name：字符串类型，代表模块的名称；
   - requires：字符串的数组，代表该模块依赖的其他模块列表，如果不依赖其他模块，用空数组即可；
   - configFn：用来对该模块进行一些配置。
[slide]
# 控制器
- controller和DOM平行
- 控制器可以声明变量和方法
- 控制器可以嵌套
- 控制器使用注意
    - 不要复用controller
    - 不要在controller中操作DOM
    - 不要再controller里格式化数据
    - 控制器之间交互是通过事件进行的
[slide]
# $scope和$rootScope
- viewModel是$scope对象
- $scope单独作用域
- 控制器继承
- 依赖诸如后代码压缩问题
```
app.controller('appCtrl',['$scope',function ($s) {
        $s.name = {a:123}
    }]);
```
- run方法的初始化
```
md.run(["$rootScope",function($s){
}]);
```

[slide]
# $watch&&$apply
- $watch 方法监视 Model 的变化
    ```
    $s.$watch('name', function (newValue,oldValue) {
               console.log(newValue,oldValue);
    });
    ```

- $apply你需要命令 AngularJS 刷新自已(模型、视图等)
    ```
    $scope.$apply(function(){})
    ```
[slide]
# ng-href
- 表达式生效前不要加载该资源
```
<a ng-href="{{ myHref }}">baidu</a>
var app = angular.module('appModule',[]);
    app.controller('appCtrl',function ($scope,$timeout) {
        $timeout(function () {
            $scope.myHref = 'http://www.baidu.com'
        },20000)
    })
```
[slide]
#ng-src
```
<img ng-src="{{imgSrc}}"/>
var app = angular.module('appModule',[]);
    app.controller('appCtrl',function ($scope,$timeout) {
        $timeout(function() {
            $scope.imgSrc = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        }, 1000);
    })
```
[slide]
# 当鼠标离开时改变model的变化
- ng-model-options
```
ng-model-options="{ updateOn: 'blur' }"
```
[slide]
# event 事件的监听机制
- $broadcast
- $emit
- $on
[slide]
# angular中的事件
- ng-change
- ng-copy
- ng-cut
- ng-paste
[slide]
# input相关指令
- ng-disabled 设置不可用
```
app.controller('totalCtrl', function ($scope,$interval) {
            $scope.name = "点击获取";$scope.flag = false;
            $scope.change = function () {
                $scope.flag = true;$scope.name = '10秒后';
                var i = 10;
                var timer = $interval(function () {
                    i--;$scope.name = i+'秒后';
                    if(i<=0){
                        $interval.cancel( timer );
                        $scope.flag = false;
                    }
                },100);
            }
});
```
[slide]
# ng-readonly 
## 通过表达式返回值true/false将表单输入字段设为只读。
```
<input type="text" ng-readonly="stop" value="3秒后禁用"/>
.run(function($rootScope,$timeout){
    $rootScope.stop=false;
    $timeout(function(){
        $rootScope.stop = true;
    },3000)
})
```
[slide]
# ng-checked&ng-selected&ng-value
- ng-checked 设置checkbox选中
- ng-selected 给select里面的option用的
- ng-value设置value值
[slide]
# 模块之间如何依赖
- 通过module依赖
```
    var app = angular.module('formApp',['formApp1']);
    app.controller('totalCtrl', function ($scope,$interval) {
        $scope.name = 1;
    });
    var app1 = angular.module('formApp1',[]);
    app1.controller('totalCtrl', function ($scope,$interval) {
        $scope.name = 20;
    });
```
# 启动多个ngapp
- angular.bootstrap
```
document.body.onclick = function () {
        angular.bootstrap(div1,['formApp1']);
        angular.bootstrap(div2,['formApp2']);
    }
```
[slide]
# $http 服务
- $http
```
    $http(
    {
        method:'GET',
        url:'person.json'
    }).success(function(data,status,headers,config){
        $scope.books = data;
    }).error(function(data,status,headers,config){
    
    })
```
- GET请求params:{data:1}
- POST请求data:{data:1}
# $http中get&post
- get
```
 $http.get('/ajax1').success(function (data,status,headers,config) {
           $scope.data = data;
        });
```
- post
```
$http.post('/ajax',{data:2}).success(function (data,status,headers,config) {
       $scope.data = data;
})
```
# $http jsonp
```
$http.jsonp('/ajax3').success(function (data,status,headers,config) {
     $scope.data = data;
})
angular.callbacks._0([{name:1}]);
```
[slide]
# 过滤器
- 在controller里使用过滤器
```
app.controller('remoteCtrl', function ($scope,$http,numberFilter) {
        $scope.total = 123.333;
        $scope.newFilter = numberFilter($scope.total,2)
    });
```
```
var app = angular.module('formApp1',[]);
    app.controller('totalCtrl', function ($scope,$http,dateFilter) {
        $scope.name = dateFilter(new Date(),'yyyy-MM')
    });
```
- 自定义过滤器
```
 app.filter('some', function (uppercaseFilter) {
        return function (content,length) {
            return uppercaseFilter(content.slice(0,length))+content.slice(length);
        }
    });
```

[slide]
# 创建指令
- 需要使用模块的directive()方法注册指令
- 对象工厂必须返回一个定义对象
- template	string	使用template指定的HTML标记替换指令内容（或指令自身）
- restrict	string	用来限定指令在HTML模板中出现的位置
- replace	true,false	是否替换原有的DOM元素
- transclude true,false	是否保留原有指令的内部元素
- scope	true,false,{}	scope属性为指令创建私有的作用域
- link	Function	link属性是一个函数，用来在指令中操作DOM树、实现数据绑定
[slide]
# template 定义替换模板
- template指明一个HTML片段,可以用来替换指令的内容
- 如果replace:true，那么用HTML片段替换指令本身
- 如果transclue:true则包裹指令的内容
[slide]
# restrict 
- 推荐使用元素和属性的方式使用指令
- 组件式指令使用元素名称的方式创建指令
- 装饰型指令使用属性的方式创建指令
[slide]
# scope
- @	把当前属性作为字符串传递。你还可以绑定来自外层scope上的值，在属性中插入{{}}即可
- =	与父scope中的属性进行双向绑定
- & 方法传递
[slide]
link:在指令中操作DOM
- scope	指令对应的scope对象。如果指令没有定义自己的本地作用域，那么传入的就是外部的作用域对象
- iElement	指令所在DOM对象的jqLite封装。如果使用了template属性，那么iElement对应 变换后的DOM对象的jqLite封装
- iAttrs	指令所在DOM对象的属性集。这是一个Hash对象，每个键是驼峰规范化后的属性名
- controller	控制器的实例,在所有指令间共享,可以作为指令交流的通道
[slide]
# angular验证
- $dirty	表单中任何一项是否输入过
- $pristine	表单中任何一项尚未输入过
- $error	存放错误信息
- $invalid	表单数据是否无效，只要有一项无效则整个表单无效
- $valid	与$invalid相反
- $name	表单的名字
- email	表单各个输入框的model
[slide]
# 创建服务组件
- service都是单例的
- angular会自动创建实例并注入，不需要手工创建
- service在整个应用的生命周期存在，可以共享数据
- provider 可配置,是唯一一种你可以传进 .config() 函数的 service。当你想要在 service 对象启用之前,先进行模块范围的配置,那就应该用 provider。
- factory 失去配置能力
- service 返回实例
[slide]
# provider
```
app.config(function (myProvider) {
        myProvider.setCurrency = '%';
    });
    app.provider('my', function () {
        this.setCurrency = '$';
        this.$get = function () {
            var that  =this;
            return {
                minus: function (a,b) {
                    return  that.setCurrency +(a-b)
                }
            }
        };
    });
    ```
    
[slide]
# factory
- 使用一个对象工厂函数定义服务，调用该工厂函数将返回服务实例。
```
app.factory('my', function () {
        var obj = {name:1,age:2}
        return {
            obj:obj
        }
    });
```
[slide]
# service
-  使用一个类构造函数定义服务，通过new操作符将创建服务实例。
```
 app.service('my', function () {
        this.set = function () {
            return 1;
        };
        this.get = function () {
            return 2;
        }
    });
```
[slide]
# constant
- 需要在不同的组件之间共享一个常量
```
app.config(function (my) {
       // my.bb=456;
    })
```
```
app.constant('my',{
    set: function () {
        return 1
    },
    get: function () {
        return 2
    }
});
```
[slide]
# value
```
app.constant('my',{
        set: function () {
            return 1
        },
        get: function () {
            return 2
        }
    });
```

[slide]
# restful
- 全称representation state transfer
    - 资源 代表网络上的一个实体
    - 表现层 一种信息有多种表现形式
    - 状态转换 对url进行不同的请求方式(get post put delete);
- (1)每一个 URI 代表一种资源; 
- (2)客户端和服务器之间,传递这种资源的某种表现层;
- (3)客户端通过四个 HTTP 动词,对服务器端资源进行操作,实现"表现层状态转化"。
[slide]
# ngResource
- 安装resource
```
 app.factory("Phone", function ($resource) {
        return $resource('user/:uid',{
            uid:'@uid'
        },{
            update:{//增加一个update 发起put请求
                method:'PUT'
          }
        });
 })
```
```
note.query({id:1});//GET
note.save({id:1,name:2});//POST
note.delete({id:1});//DELET
note.update({id:1});//PUT
```
[slide]
# ngRoute
```
app.config(function ($routeProvider) {
    $routeProvider.when('/',{
        templateUrl:'./tmpl/home.html',
        controller:'HomeCtrl'
    }).when('/user',{
        templateUrl:'./tmpl/next.html',
        controller:'HomeCtrl'
    }).otherwise({
        redirectTo:'/'
    })
});
```
[slide]
# 路由事件:
- $routeChangeStart $routeChangeSuccess/Error
```
 app.run(function ($rootScope) {
        $rootScope.$on('$routeChangeStart', function (a,b,c) {

        });
        
        $rootScope.$on('$routeChangeSuccess', function (a,b,c) {

        });
 });
 
```