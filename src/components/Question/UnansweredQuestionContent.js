import React from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../../actions/questions'

class UnansweredQuestionContent extends React.Component {
  state = {
    value: "optionOne"
  }

  handleAnswer = e => {
    e.preventDefault()
    const { dispatch, question, authedUserId } = this.props
    dispatch(handleAnswerQuestion(authedUserId, question.id, this.state.value))
  }

  render() {
    const { question } = this.props
    return (
      <div>
        <h2>Would You Rather...</h2>
        <form className="answers-form">
          <label>
            <input 
              type="radio" 
              value="optionOne" 
              name="option" 
              onChange={e => this.setState({ value: "optionOne" })} 
              checked={this.state.value === "optionOne"}
            />
            <div>{question.optionOne.text}</div>
          </label>
          <label>
            <input 
              type="radio" 
              value="optionTwo" 
              name="option" 
              onChange={e => this.setState({ value: "optionTwo" })} 
              checked={this.state.value === "optionTwo"}
            />
            <div>{question.optionTwo.text}</div>
          </label>
          <button className="button button-submit" onClick={this.handleAnswer}>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(UnansweredQuestionContent)
