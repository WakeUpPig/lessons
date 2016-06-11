# vue介绍
- 数据驱动的组件，为现代化的 Web 界面而生
- 特性
    - 简洁 数据驱动 组件化 轻量快速 模块友好
# vue的安装
```
 bower install vue
```
- 引入vue.js
# 实现双向数据绑定
- v-model
# 绑定表达式
- 可以进行运算
    - {{}}
- 支持三元运算符
- 只绑定一次
    - {{*data}}
- 实现绑定html
    - {{{data}}}
- 过滤器
# 简单的MVVM
- 一个 Vue 实例其实正是一个 MVVM 模式中所描述的 ViewModel 
- 数据和界面绑定
```
    var obj = { data : 1 }
    new Vue({
        el:'#app',
        data:obj
    });
```
- 每个 Vue 实例都会代理其 data 对象里所有的属性：
- 暴露了一些有用的实例属性与方法
```
vm.$data === data // -> true
vm.$el === document.getElementById('example') // -> true
```
#  观察 Vue 实例上的数据变动
```
vm.$watch('a', function (newVal, oldVal) {
  // 这个回调将在 `vm.a`  改变后调用
})
```



# 循环数据
- v-for="data in datas"
- $index当前遍历的索引
  {{ $key }} 
  <div v-for="(key, val) in object">
    {{ key }} {{ val }}
  </div>
- <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider"></li>
  </template>
- track-by $index
example1.items.$set(0, { childMsg: 'Changed!'})
this.items.$remove(item)
Object.freeze()
filterBy 和 orderBy。



# v-if/v-else 判断是否存在
- <h1 v-if="ok">Yes</h1>
 <h1 v-else>No</h1>
删除/插入
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
- <h1 v-show="ok">Hello!</h1>


<custom-component v-show="condition"></custom-component>
<p v-show="!condition">这可能也是一个组件</p>
一般来说，v-if 有更高的切换消耗而 v-show 有更高的初始渲染消耗。因此，如果需要频繁切换 v-show 较好，如果在运行时条件不大可能改变 v-if 较好。

# v-bind
- 缩写 :href
# v-on
- @click

# computed计算
- set和get方法

# 处理数据
- 绑定事件
```
v-on:click = 'met'
```
- 增加对应的方法
```
methods: {
    met: function () {
      this.data = this.data+"aabbcc"
    }
}

<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat">

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>
<div v-on:click.capture="doThis">...</div>

<!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
<div v-on:click.self="doThat">...</div>
<input v-on:keyup.13="submit">
enter
tab
delete
esc
space
up
down
left
right
Vue.directive('on').keyCodes.f1 = 112
```
# 动态修改数据

# class设置
- <div class={{name}}></div>
- <div v-bind:class="classObject"></div>
- v-bind:class="{ 'class-a': isA, 'class-b': isB }"
- <div v-bind:class="[classA, classB]">
- <div v-bind:class="[classA, isB ? classB : '']">
- <div v-bind:class="[classA, { classB: isB, classC: isC }]">
# style设置
- <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
- <div v-bind:style="[styleObjectA, styleObjectB]">
# vue特点
- Vue.js 自身不是一个全能框架——它只聚焦于视图层。
- 每当修改了数据，DOM 便相应地更新。这样我们应用中的逻辑就几乎都是直接修改数据了，不必与 DOM 更新搅在一起。这让我们的代码更容易撰写、理解与维护。






 
 
 
