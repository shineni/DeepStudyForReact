/*
action creator模块
 */
import {
  INCREMENT,
  DECREMENT
} from './action-types'

export const increment = number => ({type: INCREMENT, number})

export const decrement = number => ({type: DECREMENT, number})

// 异步action creator(返回一个函数)
export const incrementAsync = number => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment(number))
    }, 1000)
  }
}