import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { handleAddQuestion } from '../actions/questions' 
import { useFormInput } from '../hooks'

const NewQuestion = props => {
  let history = useHistory()
  const optionOne = useFormInput("")
  const optionTwo = useFormInput("")

  const handleAddQuestionSubmit = e => {
    e.preventDefault()
    const { dispatch, authedUserId } = props
    dispatch(handleAddQuestion(optionOne.value, optionTwo.value, authedUserId, () => { history.push('/') }))
  }

  const checkIfFormIsValid = () => {
    return optionOne.value && optionTwo.value
  }
  
  return (
    <div className="card">
      <div className="card-header">
        <h2>Create New Question</h2>
      </div>
      <div className="card-body">
        <div className="card-content flex-start">
            <p>Complete the question:</p>
          
            <h3 className="margin-top">Would you rather...</h3>
            <input
              className="input-field"
              type="text"
              placeholder="Please type option one text here"
              {...optionOne}
            />
            <div className="options-separator">
              <div className="line flex-3"></div>
              <div className="flex-1 center bold">OR</div>
              <div className="line flex-3"></div>
            </div>
            <input
              className="input-field"
              type="text"
              placeholder="Please type option two text here"
              {...optionTwo}
            />
            <button 
              className={"button button-submit" + (checkIfFormIsValid() ? "" : " disabled")}
              disabled={!checkIfFormIsValid()}
              onClick={handleAddQuestionSubmit}
            >Submit</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ authedUser }) => ({ authedUserId: authedUser.id })

NewQuestion.propTypes = {
  authedUserId: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

/**
 * NewQuestion component
 */
const NewQuestionComponent = connect(mapStateToProps)(NewQuestion)

export default NewQuestionComponent
