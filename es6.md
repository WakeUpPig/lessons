[slide]
#ECMAScript 6是什么
- ECMAScript6被称为ECMAScript2015,是2015年出版的新版本,是ES5的一次改进


[slide]
#ECMAScript 6特点
- 增加了许多必要的特性,例如模块和类,块作用域,常量和变量

[slide]
#为什么学习ES6

[slide]
#let 特性
- 不允许重复声明
- 没有预解释
- 块级别作用域(代码指在该区域才起作用)
- 一对{}包括的区域称为块代码
```
for(let i = 0;i <10;i++){
        setTimeout(function () {
            console.log(i);
        })
}
```

[slide]
#常量const
- 常量不可以修改
- 常量中对象的值可以修改

[slide]
#解构赋值
- 从数组和对象中提取值,对变量进行赋值
- 数组的解构(按照对应的顺序解构)
- 对象是无序的根据键来解构
- 交换变量var [x,y] = [y,x];

[slide]
# 字符串
- s.codePointAt(0);
- String.fromCodePoint(134071))//根据码点返回自符
- console.log(s.repeat(2)); 重复字符串
[slide]
# 模版字符串
- var str = `你的名字${name}${age}`;
- 在{}中可以进行运算,也可以引用对象属性
[slide]
#字符串
- str.includes();(返回true/false)
    - 1.要查找的字符串
    - 2.起始位置

- str.startsWith('i');
- str.endsWith()

[slide]
#进制
- 二进制 0b11;
- 八进制 0o11;

[slide]
#Math
- Math.trunc(num)干掉小数点
- Math.sign(0);判断参数是否是正数,负数
- Math.hypot(3,4); 勾三股四

[slide]
#数组的拓展
- Array.from(divs) 转数组的方式
- Array.of(1,2,3,4); 将参数变为数组
- ary.find(function(values,index){})找出第一个符合条件的数组元素
- ary.findIndex(function (values,index) {});返回位置,如果不满足返回-1
- arr.fill(6,2,3);数组填充(包前不包后)
- for(var value of obj){}不能遍历对象
- for(var key of arr.keys()){} 遍历键
- for(var key of arr.valueOf()){} 遍历值
- for(var [key,value] of arr.entries()){} key和value

[slide]
#对象的简介表示法
```
 function fn(x,y){
        x++;
        y++;
        return {x:x, y:y}
        return {x,y};
    }
```
```
var obj = {
        name:'momo',
        showName(){
            return this.name;
        }
    }
```
```
var sex = '男';
var person = {
    [sex]:false
}
console.log(person['男']);
```

[slide]
#对象的扩展
- Object.is(0,-0)/Object.is(NaN,NaN)
- Object.assign(obj1,obj2,obj3) 重复属性重复赋值
- Object.setPrototypeOf();
- Object.getPrototypeOf();

[slide]
#Proxy
```
    var p1 = new Proxy(obj,{
           get(obj,attr){ 当属性访问时出发
                return obj[attr];
           },
           set(obj,attr,value){//当属性修改时触发
                return 1;//组织报错
           }
    })

```
[slide]
#Object.observe
#Object.unoboserve