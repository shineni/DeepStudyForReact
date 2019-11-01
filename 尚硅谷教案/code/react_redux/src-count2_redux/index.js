import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import App from './components/app'
import {counter} from './redux/reducers'

// 根据counter函数创建store对象
const store = createStore(counter)

// 定义渲染根组件标签的函数
const render = () => {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  )
}
// 初始化渲染
render()

// 注册(订阅)监听, 一旦状态发生改变, 自动重新渲染
store.subscribe(render)


