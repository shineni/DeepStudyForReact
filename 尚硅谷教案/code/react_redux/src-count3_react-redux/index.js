import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './containers/app'
import {counter} from './redux/reducers'

// 根据counter函数创建store对象
const store = createStore(counter)

// 定义渲染根组件标签的函数
ReactDOM.render(
  (
    <Provider store={store}>
      <App/>
    </Provider>
  ),
  document.getElementById('root')
)


