title: angularjs
transition: vertical3d
theme:colors


[slide]
#ECMAScript 6
- ECMAScript 6（以下简称ES6）是JavaScript语言的下一代标准，已经在2015年6月正式发布了。它的目标，是使得JavaScript语言可以用来编写复杂的大型应用程序，成为企业级开发语言。
- 大部分语法在浏览器中无法使用，一部分是未实现，一部分是需要特定环境
- 为保证在chrome中能正常使用，ECMA6需要使用严格模式，即在js开头加上'use strict'
- 在firefox下则需要知道测试版本，在script的type属性中加上"application/javascript;version=1.7"

[slide]
#关键字let
- 新增关键字let，用于声明变量
- let特性：
  - 1、不允许重复声明
  - 2、没有预解析过程（暂存死区）
  - 3、块级作用域
- 块级作用域就是{}包含的代码块，变量或函数只在该区域有效
[slide]
#关键字const
- 常量const在声明之后值是固定不变的
- 常量保存的值是对象，对象的属性可修改
```
const b = {name :'Leo'};
b.name = 'ABC';
console.log(b.name);
```

[slide]
#解构赋值
- ES6中允许按照一定的模式，从数组和对象中提取值，对变量进行赋值，这被称为解构(Destructuring)
- 数组的解构赋值，多重嵌套也没问题，只要按照顺序一一对应即可
- 对象的解构赋值，只需要名字对应即可
- 作用：方便我们从中取值；变量间值的交换
- 如果解构不成功，变量的值就等于undefined
[slide]
- 对象的解构赋值方法
```
var {name:a,age:b} = {name:1,age:2};
var {name,age} = {name:1,age:2};
```
- 解构赋值指定默认值
```
var [x, y = 'b'] = ['a']; // x='a', y='b'
var [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
```
- 函数参数的解构赋值
```
function add([x,y]){
  return x + y;
}
add([1,2]); //3
```
[slide]
- 若解构不成功，则变量的值为undefine
```
var [foo] = [];
var [bar, foo] = [1];
```
- 若不完全解构，只匹配一部分的等号右边的数组
```
let [x, y] = [1, 2, 3];  //x=1,y=2
let [a, [b], d] = [1, [2, 3], 4];  //a=1,b=2,d=4
```
[slide]
- 对于let和const来说，变量不能重新赋值，一旦赋值的变量以前声明过，就会报错
```
let foo;
let {foo} = {foo: 1}; //Identifier 'foo' has already been declared
```
- 如果没有第二个let命令，则不会报错
```
let foo;
({foo} = {foo: 1});
//为避免javascript将{}解释为代码块而发生语法错误，需要在外面加一层()
```
[slide]
#字符串扩展
- javascript允许使用`\uxxxx`表示一个字符，其中xxxx为该字符的码点
- 但该种表示法仅限于0000-ffff之间的字符，若超出该段，ES6对此作出了改进，将码点放入{}中就能正确解读
```
console.log('\u20BB7'); //7
console.log('\u{20BB7}'); //𠮷
```
[slide]
- javascript中字符以UTF-16格式储存，每个字符固定为2个字节
- 对于4个字节存储的字符，javascript认为它是2个字符
```
var str = '𠮷';
console.log(str.length);  //2
console.log(str.charCodeAt(0)); //55362
console.log(str.charCodeAt(1)); //57271
```
- ES6提供了codePointAt方法，能够正确处理4个字节储存的字符，返回一个字符的码点。
```
console.log(str.codePointAt()); //134071,十六进制即20BB7
```
[slide]
#字符串方法
- String.fromCodePoint();根据码点返回字符,与codePointAt()互相转换
```
String.fromCodePoint(134071); //𠮷
```
- str.repeat(num); 该字符串前边复制num次
```
console.log('a'.repeat(5)); //aaaaa
```

[slide]
#字符串方法
- str.includes(); 返回值为布尔值，表示是否找到了参数字符串
- str.startsWith(); 返回值为布尔值，表示参数字符串是否在源字符串头部
- str.endsWith(); 返回值为布尔值，表示参数字符串是否在源字符串尾部
```
var str = 'hello world';
console.log(str.includes('ello')); //true
console.log(str.startsWith('hel')); //true
console.log(str.endsWith('ld')); //true
```
[slide]
#模板字符串(template string)
- 增强版的字符串，使用反引号（`）标识
- 如需引入变量则使用${变量名}，在{}中既可以进行运算，又可以引入对象属性
- 他可以当做普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量
```
var name = 'leo';
var age = 39;
var str = `你的名字：${name}，你的年龄：${age+1}`;
console.log(str); //你的名字：leo，你的年龄：40
```
[slide]
#数值扩展
- 0b 二进制; 0o 八进制
```
Number('0b111');
Number('0o10');
```
- Number.parseInt()转换为正数
- Number.parseInt()转换为浮点数
- ES6将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。
[slide]
#数值扩展
- Math.trunc();去除小数部分，返回整数部分
- Math.sign();判断参数为正数、负数、零、负零
- Math.hypot();返回参数的平方和的平方根
[slide]
#数组扩展
- Array.from();  将类数组转化为真正的数组
```
var str = 'hello';
console.log(Array.from(str));
```
- 任何有length属性的对象，都可以通过Array.from方法转为数组
- Array.from()还可接受第二个参数，类似于数组map()方法，用来对每个元素进行处理
```
Array.from([1, 2, 3], (x) => x * x)  //1,4,9
```
[slide]
- Array.of();  new Array();
该方法弥补了构造函数Array()的不足
```
var arr1 = new Array(3);  //arr1.length  3
var arr2 = Array.of(3);  //arr1.length  1
```
- copyWithIn(target,[start,end])在当前数组内部，将指定位置的成员复制到其他位置，返回当前数组
```
[1,2,3,4,5].copyWithIn(0,3); //4,5,3,4,5，表示从第0位开始，复制从第3位至结束的值
[1,2,3,4,5].copyWithIn(0,3,4); //4,2,3,4,5，表示从第0位开始，复制从第3位至第4位的值(不包含第4位)
```
[slide]
#数组扩展
- Array.find(value,index,arr);
```
var a = [1,2,3,4,5];
var d = a.find(function(value,index,arr){
  return value>3;
});  //找出第一个返回值为true的成员，并返回该成员，即4；若没有符合条件的成员，则返回undefine
```
- Array.findIndex();返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
- Array.fill();使用给定值，填充一个数组
```
['a','b','c'].fill(7,1,2); //若指定位置，则填充在位置处['a',7,'c']
```
- arr.includes();返回一个布尔值，表示某个数组是否包含给定的值
[slide]
#数组的遍历
- keys(); 对键名遍历
```
for(let a of ['a','b'].keys()){
  console.log(a); //0 1
}
```
- values() 对键值遍历
```
for(let a of ['a','b'].values()){
  console.log(a); //a b
}
```
- entries() 对键值对遍历
```
for(let [a,b] of ['a','b'].entries()){
  console.log(a,b); //0 'a'  1 'b'
}
```
[slide]
#数组的空位
- 数组的空位是指：数组的某一个位置没有任何值。
- 空位不是undefined，一个位置的值是undefined依然是有值的
- ES5对空位的处理各个方法都不一致，大多数情况下会忽略空位；ES6则明确了所有空位将转为undefined
```
Array.from(['a',,'b']); //["a",undefined,"b"]
```
[slide]
#数组推导
- ES6简洁写法，通过现有数组生成新数组(array comprehension)
```
var arr2 = [for(v of arr) v*2 if(v>6)if(v<10) v];
```
[slide]
#函数扩展
- 函数形参定义默认值，且必须为尾参数
```
function(a,b=n){
  return {a,b}
}
```
- 设置默认值的参数即认为可省略参数；若参数传入undefined，则认为该参数等于默认值
```
function fn(x=1,y){
  return [x,y];
}
fn();  //[1,undefined]
fn(2);  //[2,undefined]
fn(,2);  //报错
fn(undefined,1)  //[1,1]
```
[slide]
- 函数的length属性
```
(function (a, b, c = 5) {}).length  //2
```
- length的含义是该函数预期传入参数的个数，若某参数指定默认值后，则不计入length值内
[slide]
- ...rest:用于存储没有实参对应的参数,将多余的参数放入数组中
- rest之后不能再有其他参数，使用rest即表示这些参数可被忽略
```
function add(...values){
    let sum = 0;
    for(var a of values){
        sum += a;
    }
    return sum;
}
add(2,3,5); //10
```
- 根据lenght属性，rest参数也不会计入length值内
```
(function(...args) {}).length // 0
```
[slide]
#扩展运算符...
- ...扩展运算符，将数组/类数组的对象扩展为一个数组(基于有遍历接口的)
```
console.log(1,...[2,3,4],5);
```
- 该运算符主要还用于函数调用
```
function pushed(arr,...items){
    arr.push(...items);
}
function adds(x,y){
    return x+y;
}
var a = [1,2];
console.log(adds(...a));
```
[slide]
#箭头函数 =>
- 用来作为回调函数使用，并自动有返回值
  - 函数体内的this对象，绑定定义时所在的对象，而不是使用时所在的对象
  - 不可以当做构造函数，不可以new，否则会抛出一个错误
  - 函数体内不存在arguments
```
var f = v => v;
```
等同于
```
var f = function(v){
   return v;
}
```
[slide]
- 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回
```
var sum = (num1, num2) => { return num1 + num2; }
```
-由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号
```
var getTempItem = id => ({ id: id, name: "Temp" });
```
[slide]
#箭头函数与解构赋值结合使用
```
var arr = ({a,b}) => a+' '+b;
```
[slide]
#对象扩展
- 属性简洁表示法:允许直接写入变量或函数，作为对象的属性和方法
```
var foo = 'abc';
var box = {foo};  //等同于
var box = {foo : 'abc'};
```
```
function fn(x,y){
  return {a:x,b:y}
}
```
[slide]
#对象扩展
- 方法简洁表示法
```
var birth = '1992/09/01';
var obj = {
  name: '张三',
  birth,
  hello(){
    console.log('我的名字是' + this.name);
  }
};
```
[slide]
#对象扩展
- 属性名表达式['a'+'b]，需要将表达式放在方括号里面
```
obj['a'+'bc'] = 123;
```
```
var lastName = 'Zanyar';
var person = {
  firstName : 'Darin',
  ['lastName'] : lastName
};
```
- 注意：属性名表达式和简洁表示法不能同时使用，会报错的哟~
[slide]
#对象方法
- Object.is(); 比较两个值是否严格相等
```
Object.is(0,-0);
Object.is(NaN,NaN);
```
- Object.assign(target,source1,source2,...); 对象合并，将源对象可枚举属性复制到目标对象上
- 若目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性
```
var obj = {};
var obj2 = {a:1};
var obj3 = {b:2};
var obj4 = {b:3,c:4};
Object.assign(obj,obj2,obj3,obj4);
```
- 用途：为对象添加属性/方法；克隆对象；合并对象；为属性指定默认值
[slide]
- Object.getPrototypeOf(object);
- Object.setPrototypeOf(object,prototype);
```
var obj = Object.setPrototypeOf({},null);
```
- _proto_读取或设置当前对象的prototype对象

[slide]
- Object.observe(obj,fn,[eventType]);
- Object.unobserve(obj,fn);
- Reflect.ownKeys(obj);

[slide]
#Symbol
- ES6新引入的原始数据类型Symbol，表示独一无二的值，它是js里第七种数据类型
- 前六种：Number,Undefined,Null,Boolead,String,Object
- 凡是属性名属于Symbol类型的都是唯一的，以此保证不与其他属性名产生冲突
```
var s1 = Symbol();
var s2 = Symbol();
console.log(s1 === s2);
```
- Symbol函数的参数只是对当前的Symbol值进行描述
```
var s1 = Symbol('foo');
var s2 = Symbol('bar');
console.log(s1 === s2);
```
[slide]
- Symbol作为属性名,以保证不会出现同名属性
```
var mySymbol = Symbol();
var obj = {};
obj[mySymbol] = 'Hello';
var obj2 = {
  [mySymbol] : 'Hello'
};
console.log(obj[mySymbol]);
console.log(obj2[mySybol]);
```
[slide]
#数据结构Set
- Set,类似数组，所有成员值都是唯一的；是一个构造函数，可传入数组初始化默认值
```
var set = new Set([1,2,3,4,4,5,5]);
console.log(set);
```
- set.add(value);该方法只能接受一个参数，并将其添加至数组中，若多于一个则忽略掉
```
set.add(6，7);
console.log(set);
```
- set.size 返回实例成员总数
```
console.log(set.size);
```
[slide]
- set.delete(value);同add()方法一样，只能传入一个值，并从源数组中删掉，多余的将被忽略
```
set.delete(5,6);
console.log(set);
```
- set.has(value);判断该值是否存在于源数组中，若有则返回true
```
console.log(set.has(4)); // true
```
- set.clear();清除数组中所有的值

[slide]
#WeakSet(list)
- 不重复的值的集合
- 构造函数
- 成员只能是对象，不能是其他值
- 成员对象是弱引用，垃圾回收机制不考虑
- 不可遍历，forEach、for of不能使用
- 可用来监控DOM对象是否存在，没什么用处
[slide]
#WeakSet方法
- ws.add();
- ws.delete();
- ws.has();


[slide]
#数据结构Map
- Map本质上是键值的集合，
- Map中不允许出现值相同
- 对象也可作为键值出现
- 例：
```
Map([[key,value],[key2,value2],...]);
```
```
var map = new Map([[name:'张三'],[age:29]]);
```
[slide]
- map.size返回成员总数
```
console.log(map.size);
```
- map.set(key,value);设置key值对应的键值，若key已有值，则键值会被更新
```
map.set(gender:'male');
```
- map.get(key | obj); 读取key对应的键值，若没有则返回undefined
```
map.get(name);
```
- map.has(key);  判断该键是否存在在Map数据中，返回布尔值
- map.delete(key);  根据key值删除某个键，若删除成功则返回true,否则返回false
- map.clear();  清空所有成员
[slide]
- 注意事项：只有对同一个对象的引用，Map才将其视为同一个键
```
var map = new Map();
map.set(['a',555]);
console.log(map.get('a'));
```
- set和get表面是针对同一个键值，实际上是两个值，因为内存地址不一样，所以get无法获取到，返回undefined
[slide]
#转换数组
- var arr = [...map];以扩展运算符的方式转换
```
var arr = new Map([[1,'one'],[2,'two'],[3,'three']]);
console.log([...arr]);
```
[slide]
#map遍历
- map.forEach(function(val,attr){});
```
map.forEach(function(value,key,map){
  console.log('key:'+key+',value:'+value);
})
```
- for(var key of map.keys())
- for(var value of map.values())
- for(var [key,value] of map.entries())
[slide]
#WeakMap
- WeakMap只接受对象作为键名(null除外)，而且键名所指向的对象不计入垃圾回收机制
[slide]
#遍历接口
- for of 遍历的地方有遍历接口，它会返回一个方法，遍历时会调用该方法
- 接口部署
  ```
  Object.prototype[Symbol.iterator] = function(){
      var keys = Object.keys(this);  //this指代function
      var _self = this;
      var index = 0;
      return {
          next(){
              if(index < keys.length){
                  return {value:_self[keys[index++]],done:false}
              }else{
                  return {value:undefined,done:true}
              }
          }
      };
  }
  ```
  - value是当前成员值，done属性是一个布尔值，表示遍历是否结束
[slide]
#next()
- 指针对象的next方法用来移动指针。开始时，指针指向数组的开始位置。然后，每次调用next方法，指针就会指向数组的下一个成员。第一次调用，指向第一个值；第二次调用，指向第二个值。










