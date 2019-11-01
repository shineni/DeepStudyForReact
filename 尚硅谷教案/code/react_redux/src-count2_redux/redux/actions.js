/*
action creator模块
 */
import {INCREMENT, DECREMENT} from './action-types'

export const increment = number => ({type: INCREMENT, number})
export const decrement = number => ({type: DECREMENT, number})