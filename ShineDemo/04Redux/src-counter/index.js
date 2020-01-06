import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import App from './components/app'
import store from "./redux/store";

//生成一个store对象,参数是reducer
// const store = createStore(counter) //内部会第一次调用reducer函数得到初始的state
// console.log(store)

function render(){
    ReactDOM.render(<App store={store}/>,document.getElementById('root'));   
}
 // 初始化渲染 
 render()
 //订阅监听（store中的状态变化了，就会自动调用）
store.subscribe(render)