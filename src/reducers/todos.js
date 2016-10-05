const todo = (state, action) => {
  const {type, payload} = action
  switch (type) {
    case 'ADD_TODO':
      return {
        id: payload.id,
        text: payload.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== payload.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  const {type, payload} = action
  switch (type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== payload.id)
    case 'RESTORE_TODO':
      return [
        ...state.slice(0, payload.index),
        payload.todo,
        ...state.slice(payload.index)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
