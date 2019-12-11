//引入react
//引入react-dom用于渲染
//引入App组件
import React from 'react'
import ReactDOM from 'react-dom'
//引入第三方模块写模块名，引入自定义模块需要写路径
import App from './components/app'
import './index.css'

ReactDOM.render(<App/>,document.getElementById('root'))