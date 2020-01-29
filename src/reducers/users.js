import { RECEIVE_USERS } from '../actions/users'

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users
    default:
      return state
  }
}
