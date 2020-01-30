import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { _getUsers, _getQuestions } from '../utils/_DATA'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'

export const RECEIVE_DATA = "RECEIVE_DATA"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

export const setCurrentPage = page => ({
  type: SET_CURRENT_PAGE,
  page
})

export const handleReceiveData = () => async dispatch => {
  dispatch(showLoading())
  try {
    const users = await _getUsers()
    const questions = await _getQuestions()
    dispatch(receiveUsers(users))
    dispatch(receiveQuestions(questions))
    dispatch(hideLoading())
  } catch (e) {
    dispatch(hideLoading())
    console.log(e)
  }
}
