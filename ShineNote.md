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
组件被称为“状态机”，通过更新对应的页面显示（重新渲染组件）
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
    ES6推荐解构的方式获取  const {propertyName} = this.state
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

### 3.2 props
image 标签： `<img src="wrongname.gif" alt="Flowers in Chania">`显示动态信息，需要标签将信息src里面的内容传过去
props和image标签类似，是组件的一个属性
1. 指定组件类的属性默认值
            PersonInfo.defaultProps ={
                name:"shine"
            }
2.对组件类的props中的属性进行类型以及必要性的限制
            PersonInfo.propTypes = {
                name:PropTypes.string.isRequired;
                age: PropTypes.number.isRequired;
            }
3.扩展属性：将对象的所用属性通过props传递
            {...p1}
```
        const p1={name:"Tom",gender:"女"}
        const p2={name:"Jack",age:17}
        //工厂函数（函数怎么接受属性：传参,prop的类型是一个对象，state也是对象）
        function PersonInfo1(props) {
            return (
                   <ul>
                        <li>{props.name}</li>
                        <li>{props.gender}</li>
                        <li>{props.age}</li>
                   </ul>
            )
        }

        //定义组件类
        class PersonInfo extends React.Component{
            constructor(props){
                super(props)
            }
           render(){
               return (
                   <ul>
                        <li>{this.props.name}</li>
                        <li>{this.props.gender}</li>
                        <li>{this.props.age}</li>
                   </ul>
               )
           }
        }
        PersonInfo.defaultProps={
                gender:"男",
                age:18
        }
        PersonInfo.propTypes = {
            name: ReactPropTypes.string.isRequired,
            age: ReactPropTypes.number
        }

        //渲染组件
        /*
        ...的作用
        1.打包 function fn(...as){} fun(1,2,3)
        2.解包 const arr1 = {1,2,3} const arr2 ={6,...arr1,9}
         */
        ReactDOM.render(<PersonInfo1 name={p1.name} gender={p1.gender} age={p1.age}/>,document.getElementById("example"));
        ReactDOM.render(<PersonInfo1 {...p2}/>,document.getElementById("example1"))
```

### 3.3 refs
 4.refs: 用于标识组件内部的元素
1. 定义：
    方案1， 给它一个标识：
    `<input type="text" ref="content"/> &nbsp; &nbsp;&nbsp;`
    官方建议方案2 ：
    `<input type="text" ref={input=>this.input=input}/> &nbsp; &nbsp;&nbsp;`
    ref里面是回调函数，回调函数在第一次渲染的时候就会被调用
        1)回调函数种的参数input指的是当前的inputDOM元素,
        2)this.input = input 讲当前的DOM元素绑定到组件对象上去
2.  使用
    方案1：this.refs.content
    方案2：this.input.value

## 5.组件化编码的流程
功能界面组件化编码的流程：demo_ShineExamples/08CombineComponent
1. 拆分组件:拆分界面，抽取组件
    - 页面有个根组件 App
    - 添加组件 Add
    - 列表组件 List
2. 先实现静态组件(只画页面不做交互（绑定事件）)，给组件指定render
3. 实现动态组件
    3.1动态显示初始化数据(数据放在哪个组件)
    3.2交互功能（从绑定事件监听开始）

**常见问题：**
1. 数据保存到哪个组件的依据：
    看数据是某个组件需要（给它）还是某些组件需要（给它们的共同组件）
2. 如何实现在子组件中更新父组件的状态
    子组件中不能直接改变父组件的状态，状态在哪个组件，更新状态的行为（函数方法）就应该定义在哪个组件
    解决方案：父组件定义函数，传递给子组件，子组件调用

【受控组件和非受控组件】 demo_ShineExamples/09Form
包含表单的组件的分类：
1. 受控组件：表单项输入数据能够自动收集成状态 （密码，定义状态，定义事件）
2. 非受控组件：需要时才手动读取表单输入框中的数据 （用户名）
编码：非受控组件更简单
React组件的思想是：尽可能不去操作DOM，非受控组件在操作DOM，所以推荐使用受控组件

## 6 组件生命周期
挂载：挂到页面中去

1. 初始化显示的过程（生命周期回调函数【回调函数：你定义的你没有调用，但是最终执行了】）：
    【constructor()-->componentWillMount()-->render()-->componentDidMount()】
        a) constructor: 创建对象初始化state, 如果不用箭头函数的时候需要在这里绑定this
        b) componentWillMount:将要插入回调
        c) render:用于插入虚拟DOM回调
        d) componentDidMount(): 已经插入回调
        这些生命周期的函数，不写自己也会调用，只不过如果不写那么就不会出现自己想要的东西
        声明式编程：填空题
        命令式编程：自己定义好每一步，所有的都由你控制(Jquery)
2. 每次更新state:this.setState 
    【componentWillUpdate()-->render()-->componentDidUpdate()】
        a)componentWillUpdate():将要更新的回调
        b)render()：更新（重新渲染）
        c)componentDidUpdate()：已经更新回调
3. 移除组件：ReactDOM.unmountComponentAtNode(containerDom)
    【componentWillUnmount】组件将要移除的回调

**重要的生命周期勾子**
1. render():初始化渲染或更新渲染调用
2. componentDidMount():开启监听，发送ajax请求
3. componentWillUnmount():做些收尾工作，清除定时器
4. componentWillReceiveProps():后面需要时讲

## 7 脚手架
目录：
```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```
1. node_modules 文件夹可以忽略，到时候可以直接安装
2. package.json
dependencies：运行时依赖
devDependencies: 开发时依赖（编译打包的时候需要，运行的时候不需要）
package.json 当前应用的描述文件，描述当前项目相关信息的文件，包指的时当前应用（一个文件夹怎么能称为一个应用或者称为包：有专门的包描述信息文件package.json）
	重要方面：
    1.当前应用的标识 name（不变）, version(变)
    2.当前应用的依赖（dependencies,devDependencies）
   3.当前应用如何运行打包(scripts脚本，这些命令通过npm run运行)
3. ReadMe:应用的说明文件
```
{
  "name": "react_blank",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.2.0",
    "react-dom": "^16.2.0"
  },
  "devDependencies": {
    "react-scripts": "1.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```
一个webpack 应用一般都会有一个入口JS文件，入口的名字通过webpack去配置，一般有两个一个是index.js,一个叫main.js

SPA： Single Page Application单页面应用
所用的class-->className

npm install -g create-react-app
create-react-app hello-react
cd hello-react
npm start  //完整命令是npm run start 但是run可以省略 start是来源于package.json中的scripts， build 生成打包文件


全局下载包：所有应用都能看到：npm install -g create-react-app
查询全局的下载根目录:  npm root -g
   C:\Users\sni019\AppData\Roaming\npm\node_modules
create-react-app react_app 命令中的前一段create-react-app是和全局下载的包的名字一样，然后加要指定的项目的名称

【打开指定目录的控制台的两个方式】
1. 在File Folder中定位到目标目录，然后敲入cmd
2. 在指定的目标目录， shift+鼠标右键 选择powershell
- 下载对应的应用以及依赖的模块

自己创建项目的步骤：
1. 创建入口文件 index.js
2. 所有组件都可以放到一个文件夹中components,【组件命名规律：文件名小写，组件名大写，组件的后缀名用jsx便于区分是一般模块还是组件模块，不过组件后缀名也可以用js】
//脚手架会自动打包编译，热更新



