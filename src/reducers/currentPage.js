import { SET_CURRENT_PAGE } from '../actions/shared'

export default (state = "home", action) => {
  switch(action.type) {
    case SET_CURRENT_PAGE: {
      return action.page
    }
    default: return state
  }
}
