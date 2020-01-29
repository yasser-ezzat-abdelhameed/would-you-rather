import { RECEIVE_QUESTIONS } from '../actions/questions'

export default (state = {}, action) => {
  console.log("action => ", action)
  switch (action.type) {
    case RECEIVE_QUESTIONS: {
      return action.questions
    }
    default: return state
  }
}
