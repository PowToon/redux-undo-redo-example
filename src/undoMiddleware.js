import {createUndoMiddleware} from 'redux-undo-redo'
import {toggleTodo, deleteTodo} from './actions'

export default createUndoMiddleware({
  revertingActions: {
    'ADD_TODO': ({id}) => deleteTodo(id),
    'TOGGLE_TODO': ({id}) => toggleTodo(id)
  }
})
