/*
根据老的state和指定action, 处理返回一个新的state
 */
import {INCREMENT, DECREMENT} from './action-types'

export function counter(state = 0, action) {
  console.log('counter', state, action)
  switch (action.type) {
    case INCREMENT:
      return state + action.number
    case DECREMENT:
      return state - action.number
    default:
      return state
  }
}