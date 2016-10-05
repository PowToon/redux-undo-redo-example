import {createUndoMiddleware} from 'redux-undo-redo'

export default createUndoMiddleware({
  revertingActions: {
  }
})
