import {createUndoMiddleware} from 'redux-undo-redo'
import {toggleTodo, deleteTodo, setVisibilityFilter} from './actions'

export default createUndoMiddleware({
  getViewState: state => state.visibilityFilter,
  setViewState: setVisibilityFilter,
  revertingActions: {
    'ADD_TODO': ({id}) => deleteTodo(id),
    'TOGGLE_TODO': ({id}) => toggleTodo(id)
  }
})
