# React学习笔记
## 创建项目
Mac:
```
$ cnpm install -g create-react-app
$ create-react-app my-app
$ cd my-app/
$ npm start
```
Windows:
```
npx create-react-app my-app
cd my-app
npm start
```

效果图：
![](效果图/1.png)

## 面试点
* 虚拟DOM，不总是直接操作DOM
* DOM Diff算法，最小化页面重绘，减小重绘点区域，提高效率

## 相关js库
* react.js:React的核心库
* react-dom.js:提供操作DOM的react扩展库
* babel.min.js:解析JSX语法代码转为纯JS语法代码的库，还有个功能ES6转ES5，我们写的JSX代码，这个库解析成JS代码

## 提示
* ==组件标签首字母大写，跟Html标签区分开来==

##自定义组件
### 1)定义组件
```
<script type="text/babel">
    //1.定义组件
    //方式1：工厂函数组件(简单组件)
    function MyComponent(){
        return <h2>工厂函数组件(简单组件)</h2>
    }

    //方式2：ES6类组件(复杂组件)
    class MyComponent2 extends React.Component{
        render(){
            return <h2>ES6类组件(复杂组件)</h2>
        }
    }
    ReactDOM.render(<MyComponent />,document.getElementById('example1'))
    ReactDOM.render(<MyComponent2 />,document.getElementById('example2'))
</script>
```

## 组件三大属性
#### 1.state
* state是组件对象最重要的属性，值是对象(可以包含多个数据)
* 组件被称为“状态机”，通过更新组件的state来更新对象页面显示(重新渲染组件)
#### 2.props

#### 3.refs

# 参考学习链接
* [菜鸟教程](https://www.runoob.com/react/react-install.html)
* [尚硅谷](https://www.bilibili.com/video/av51174155?from=search&seid=15105180625631138353)
* [中文官网](https://zh-hans.reactjs.org/)
* [react-pxq开源项目](https://github.com/bailicangdu/react-pxq)
* [react库 bootcnd](https://www.bootcdn.cn/react/)
