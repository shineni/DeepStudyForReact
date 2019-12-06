# React学习笔记
## 1. React入门
### 1.1 React是什么
		Facebook 开源的用于动态构建用户页面的js库。构建用户界面简而言之就是展示数据。
### 1.2 React的特点
1. 声明式编码（传统的jquery库是命令式的函数库，用这些函数直接操做DOM节点）
2. 组件化的编程思想
3. Learn once,write anywhere
4. 高效 （从两个方面着手）
	- 减少更新的次数：采用虚拟DOM,进行批量地更新
    - 缩小更新的区域： DOM diff算法，最小化页面的重绘
5. 单向数据流

### 1.3 React的涉及的库
> react.js React 核心库
> react-dom.js 提供操作DOM的react扩展库
> bable.min.js 1.将ES6翻译成ES5  2.解析JSX语法

React编程思路：
1.创建虚拟DOM(两种方式):
- 方式一：纯js(一般不用) `React.createElement('h1',{id:'mytitle'},title)`
- 方式二：JSX `<h1 id="title">{title}</h1>`

2.将虚拟DOM 渲染到页面真实的容器DOM元素中： 语法: ` ReactDOM.render(virtualDOM（js或jsx创建的虚拟DOM元素）, containerDOM（包含虚拟DOM的真实DOM元素对象）)；`

## 2.React基本概念
### 2.1 JSX（JavaScript XML）
#### 2.1.1 存在的背景
用于创建react虚拟DOM元素对象
#### 2.1.2 如何实现虚拟DOM元素的创建
在JavaScript中写HTML标签或者自定义的组件标签，具体的语法规则如下：
1.	遇到 <开头的代码, 以标签的语法解析: html同名标签转换为html同名元素, 其它标签需要特别解析
2.	遇到以 { 开头的代码，以JS语法解析: 标签中的js代码必须用{ }包含

#### 2.1.3 React怎样识别JSX(即babel.js的用途)
1.	浏览器不能直接解析JSX代码, 需要babel转译为纯JS的代码才能运行
2.	只要用了JSX，都要加上type="text/babel", 声明需要babel来处理


### 2.2 创建虚拟DOM的两种方式
方式一：React提供的API实现：React.createElement(tag名，标签属性，内容)
```
 		var message = "I like YOU"
        const myId1 = "shineni"
		//React.createElement(tag名，标签属性，内容)
        var vDOM1 = React.createElement('h1',{id:myId1.toLowerCase()},message.toUpperCase())
        ReactDOM.render(vDOM1,document.getElementById("test1"))
```
方式二：JSX方式
```
        var message = "I like YOU"
        const myId2 = "shineni"
        //创建虚拟DOM ,渲染虚拟DOM
        var vDOM2 = <h3 id={myId2.toUpperCase()}>{message.toLowerCase()}</h3>
        ReactDOM.render(vDOM2, document.getElementById("test2"))
```
**虚拟DOM和真实DOM的区别**
- 虚拟DOM和真实DOM是一一对应的关系，只不过虚拟DOM比较轻（内容少），真实DOM比较重（内容多）
- 虚拟DOM 最终在执行完render函数以后转换为真实的DOM

**如何将数组转为标签的数组（map）**
```
<div id = "example"></div>
<script type="text/babel">
var names=['jquery','zepto','angular','react','vue']
//创建虚拟DOM
var vDOM=<ul>
        {
			names.map((name,index)=><li key={index}>{name}<li>)
        }
        </ul>
//渲染DOM
ReactDOM.render(vDOM,document.getElementById("example"))
</script>
```
### 2.3 模块与组件&&模块化与组件化
#### 2.3.1 模块与组件
	1. 模块:
	  	理解: 向外提供特定功能的js程序, 一般就是一个js文件
	  	为什么: js代码更多更复杂
	  	作用: 复用js, 简化js的编写, 提高js运行效率
	2. 组件:
		理解: 用来实现特定功能效果的代码集合(html/css/js)
	  	为什么: 一个界面的功能太复杂了
	  	作用: 复用编码, 简化项目界面编码, 提高运行效率
#### 2.3.2 模块化与组件化
    1. 模块化:
    	当应用的js都以模块来编写的, 这个应用就是一个模块化的应用
    2. 组件化:
    	当应用是以多组件的方式实现功能, 这上应用就是一个组件化的应用
### 2.4 组件化开发
#### 2.4.1 创建组件类
方式一：工厂函数组件（简单组件，返回值是一个虚拟DOM）
```
	function MyComponent1(){
    	return <h2>工厂函数组件</h2>
    }
```
渲染组件时直接调用方法
方式二： ES6类组件（复杂组件）
```
	class MyComponent2 extends React.Component{
    	render(){
        	return <h2>ES6组件（复杂组件）</h2>
        }
   }
```
渲染组件时会发生以下几件事情：
1. 创建类的实例对象
2. 执行类的render方法，得到虚拟DOM
3. 将虚拟DOM 渲染到页面真实的容器DOM元素中，生成真实的DOM,再展示页面

**说明**
第二种方法的原理：
- 自定义一个类继承自React的Component类
- 类有构造函数（后面说）

### 2.4.2 渲染组件标签
`ReactDOM.render(<MyComponent/>, document.getElementById("example"))`
`ReactDOM.render(<MyComponent2/>, document.getElementById("example2"))`
## 3. React三要素
### 3.1 state
React中并不是直接去操作DOM,它只需要操所数据，这个数据就是state, state是一个对象
1. 初始化状态
```
    constructor(props){
            super(props){
                this.state={
                    stateprop1:value1,
                    stateprop2:value2
                }
            }
    }
```
2. 状态的读取
	`this.state.statePropertyName`
3.  更新状态:setState()
```
	this.setState({
    	stateProp1:newValue1,
        statePorp2:newValue2
    })
```
**[说明]**对于没有状态的组件一般用工厂函数组件，这是因为工厂函数组效率高，不会创建类的实例，只会直接调用函数，但是一旦有状态那么就需要用类组件
```
class Like extends React.Component{
        constructor(props){ //constructor接受一个参数
            super(props) //调用父类的构造函数
            //初始化状态
            this.state={
                isLike:false
            }
            /*将新增的方法中的this强制绑定为组件对象，本质上执行的时候不再是handleClick函数，
            而是通过bind绑定后产生的新的函数，只是新函数的函数题和handleClick是一样的，感觉好像是在执行handleClick函数一样*/
            this.handleClick= this.handleClick.bind(this)
        }

        /*
        handleClick是新增方法：内部的this默认不是组件对象，而是undefined
        */
        handleClick(){
            //更新状态
            const isLike = !this.state.isLike //ES6解构赋值
            this.setState({isLike})
        }
        /*
        render()是重写组件类的方法，也就是说本身就有该方法
        */
        render(){
            //读取状态
            const {isLike} = this.state;
            return (
                //做交互，绑定事件监听，this指向组件对象，只告诉它调用哪个方法，不能写（），也可以在这里绑定，但是效率低，每次渲染绑定一次，在构造函数中写只会执行一次
                <h2 onClick={this.handleClick}>{isLike?"我喜欢你":"你喜欢我"}</h2>
            )
        }
    }
    //渲染组件
    ReactDOM.render(<Like/>,document.getElementById("example"))
```

#### 3.2 props
### 3.3 refs