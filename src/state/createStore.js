import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === 'TOGGLE_MENU') {    
    return Object.assign({}, state, {
      menuOpen: action.menuOpen,
    })
  }
  return state
}

const initialState = { menuOpen: false }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
