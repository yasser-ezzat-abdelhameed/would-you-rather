import { showLoading, hideLoading } from 'react-redux-loading'
import { _login } from '../utils/_DATA'

export const SET_AUTHED_USER = "SET_AUTHED_USER"

export const setAuthedUser = user => ({
  type: SET_AUTHED_USER,
  user
})

export const handleLogin = (username, password) => dispatch => {
  dispatch(showLoading())
  _login(username, password)
    .then(user => {
      dispatch(setAuthedUser(user))
      dispatch(hideLoading())
	})
    .catch(err => {
      alert(err)
      dispatch(hideLoading())
    })
}