import { showLoading, hideLoading } from 'react-redux-loading'
import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'
import { handleReceiveData } from './shared'
import { setAuthedUser } from './authedUser'

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const ANSWER_QUESTION = "ANSWER_QUESTION"
export const ADD_QUESTION = "ADD_QUESTION"

export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
})

export const handleAnswerQuestion = (authedUser, qid, answer) => async (dispatch, getState) => {
  try {
    dispatch(showLoading())
    await _saveQuestionAnswer({authedUser, qid, answer})
    await dispatch(handleReceiveData())
    dispatch(setAuthedUser(getState().users[authedUser]))
    dispatch(hideLoading())
  } catch (e) {
    dispatch(hideLoading())
    console.log(e)
  }
}

export const handleAddQuestion = (optionOneText, optionTwoText, author, callback) => async (dispatch, getState) => {
  try {
    dispatch(showLoading())
    await _saveQuestion({ optionOneText, optionTwoText, author })
    await dispatch(handleReceiveData())
    dispatch(setAuthedUser(getState().users[author]))
    callback()
    dispatch(hideLoading())
  } catch(e) {
    dispatch(hideLoading())
    console.log(e)
  }
}
