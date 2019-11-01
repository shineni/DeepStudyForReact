import {combineReducers} from 'redux'
import {
  INCREMENT,
  DECREMENT
} from './action-types'

function counter(state = 0, action) {
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

export default combineReducers({
  counter
})
