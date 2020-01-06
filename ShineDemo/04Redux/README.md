# Redux
## Redux 是什么？
组件应用中对组件状态进行进行集中式的管理
dispatch(action) 分发最终会导致subscribe回调函数调用
subscribe()
箭头函数就是匿名函数
Steps:
1.在index.js中引入创建store对象的函数
    1.1 生成一个store对象，参数是reducer  const store = createStore(counter)
    1.2 创建一个文件夹专门存放与Redux相关的
        1.2.1 创建包含n个reducer函数的模块， reducers.js
        1.2.2 创建一个包含所有action对象名称的常量字符串模块， action-types.js

2.在index.js中将store以属性的方式传给app组件  
    ReactDOM.render(<App store={store}/>,document.getElementById('root')); 
3. app.js中如何获取store 的 state
    this.props.store.getState()
4. app.js 中如何更改state
    app.js不可以修改store的状态，只能dispatch(action)
    index.js中通过subscribe(函数),一旦监听到store的状态变化了，就会触发页面重绘

上述写法有一个缺点就是 redux 和 react 耦合度很高，也就是关联性很强，因此我们用react-redux来简化
react-redux是react 插件库， 用于简化在react中编写redux代码

## react-redux

改动Steps:
1. 引入react-redux库，并用npm 来安装
2. 在index.js中做以下几个操作(有了Provider以后，Provider会帮助我们去做事件监听store.subscribe)
    2.1 用 Provider包裹起来
    2.2 将store的管理权交给Provider
3. 在 app.js中做以下几个操作
    3.1 添加如下代码
            static PropTypes ={
                count: PropTypes.number.isRequired,
                increment: PropTypes.func.isRequired,
                decrement: PropTypes.func.isRequired
            }
    3.2 替换所有的 this.props.store.dispatch(increment(num)) 为 this.props.increment(num)
    3.3  替换所有的this.props.store.getState() 为this.props并采用解构，因为PropTypes中已经有count了

    3.4 引入connect 组件用于连接react与redux组件
        export default connect(
            state=>{count: state},
            {increment,decrement}
        )(App)
        几点说明：
        1. connect是一个函数，需要接受一个参数（组件类， 该函数行以后返回的一个函数，也就是新的组件
        2. index.js最终渲染的app不是定义的class组件而是经过connect包装输出的组件
        3. connect接收两种参数，第一种是一般数据，第二种是函数数据
            第一个参数： 返回的是一个对象，对象的如{count:state中解构出来的值}
            第二个参数： 返回的是一个对象，不过该对象中是两个方法{increment:increment,decrement:decrement} increment(和propTypes中声明的接收的参数名一致)： increment(和action名字一致)
        4. 最终这两个对象里面的数据都会被解构(...)，交给App作为它的属性名

React-Redux 将所有的组件分成两大类
1. UI组件 (不使用Redux的API,一般保存在components文件夹下面)
2. 容器组件（使用Redux的API，一般保存在containers或者views文件夹下面）

中间件 
 steps
 1. npm install --save redux-thunk
 2. applyMiddleware
                        


