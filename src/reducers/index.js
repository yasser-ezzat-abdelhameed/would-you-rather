import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'
import currentPage from './currentPage'

const reducers = combineReducers({
  loadingBar: loadingBarReducer,
  authedUser,
  users,
  questions,
  currentPage
})

export default reducers
