import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './components/app/app'
import store from './redux/store'

// 定义渲染根组件标签的函数
ReactDOM.render(
  (
    <Provider store={store}>
      <App/>
    </Provider>
  ),
  document.getElementById('root')
)
