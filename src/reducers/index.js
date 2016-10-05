import { combineReducers } from 'redux'
import {undoHistoryReducer} from 'redux-undo-redo'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  undoHistory: undoHistoryReducer
})

export default todoApp
