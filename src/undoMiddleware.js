import {createUndoMiddleware} from 'redux-undo-redo'
import {toggleTodo, deleteTodo, restoreTodo, setVisibilityFilter} from './actions'

export default createUndoMiddleware({
  getViewState: state => state.visibilityFilter,
  setViewState: setVisibilityFilter,
  revertingActions: {
    'ADD_TODO': ({id}) => deleteTodo(id),
    'TOGGLE_TODO': ({id}) => toggleTodo(id),
    'DELETE_TODO': {
      action: (payload, {todo, index}) => restoreTodo(todo, index),
      meta: (state, {id}) => {
        const index = state.todos.findIndex(todo => todo.id === id)
        return {
          index,
          todo: state.todos[index]
        }
      }
    }
  }
})
