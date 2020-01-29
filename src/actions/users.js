import { showLoading, hideLoading } from 'react-redux-loading'
import { _getUsers, _signup } from '../utils/_DATA'

export const RECEIVE_USERS = "RECEIVE_USERS"
export const SIGNUP = "SIGNUP"

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

export const handleReceiveUsersForLogin = () => async dispatch => {
  try {
    dispatch(showLoading())
    const users = await _getUsers()
    const result = {}
    for (let userId in users) {
      if (users[userId].isOriginal) {
        result[userId] = users[userId]
      }
    }
    dispatch(receiveUsers(result))
    dispatch(hideLoading())
  } catch (e) {
    dispatch(hideLoading())
    console.log(e)
  }
}

export const handleSignup = (username, name, password, callback) => async dispatch => {
  try {
    dispatch(showLoading())
    await _signup(username, name, password)
    dispatch(hideLoading())
    callback()
  } catch (e) {
    alert(e)
    dispatch(hideLoading())
  }
}
