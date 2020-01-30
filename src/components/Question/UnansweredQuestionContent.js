import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { handleAnswerQuestion } from '../../actions/questions'

const UnansweredQuestionContent = ({ dispatch, question, authedUserId }) => {
  const [value, setValue] = useState("optionOne")

  const handleAnswer = e => {
    e.preventDefault()
    dispatch(handleAnswerQuestion(authedUserId, question.id, value))
  }

  const handleAnswerChange = val => {
    setValue(val)
  }

  return (
    <div>
      <h2>Would You Rather...</h2>
      <form className="answers-form">
        <label>
          <input 
            type="radio" 
            value="optionOne" 
            name="option" 
            onChange={handleAnswerChange.bind(this, "optionOne")}
            checked={value === "optionOne"}
          />
          <div>{question.optionOne.text}</div>
        </label>
        <label>
          <input 
            type="radio" 
            value="optionTwo" 
            name="option" 
            onChange={handleAnswerChange.bind(this, "optionTwo")}
            checked={value === "optionTwo"}
          />
          <div>{question.optionTwo.text}</div>
        </label>
        <button className="button button-submit" onClick={handleAnswer}>Submit</button>
      </form>
    </div>
  )
}

UnansweredQuestionContent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
  authedUserId: PropTypes.string.isRequired
}

/**
 * UnansweredQuestionContent component
 */
const UnansweredQuestionContentComponent = connect()(UnansweredQuestionContent)

export default UnansweredQuestionContentComponent
