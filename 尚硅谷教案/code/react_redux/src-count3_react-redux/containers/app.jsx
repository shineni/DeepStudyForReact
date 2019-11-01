/*
包含Counter组件的容器组件
 */
import React from 'react'
// 引入连接函数
import {connect} from 'react-redux'
// 引入action函数
import {increment, decrement} from '../redux/actions'

import Counter from '../components/counter'

// 向外暴露连接App组件的包装组件
export default connect(
  state => ({count: state}),
  {increment, decrement}
)(Counter)
