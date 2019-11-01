import {combineReducers} from 'redux'

import {
  ADD_COMMENT,
  DELETE_COMMENT,
  RECEIVE_COMMENTS
} from './action-types'

const initComments = []

function comments(state = initComments, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.data]
    case DELETE_COMMENT:
      return state.filter((c, index) => index !== action.data)
    case RECEIVE_COMMENTS:
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  comments
})