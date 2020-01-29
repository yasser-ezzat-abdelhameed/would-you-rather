import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import AnsweredQuestionContent from './AnsweredQuestionContent'
import UnansweredQuestionContent from './UnansweredQuestionContent'

class Question extends React.Component {
  render() {
    const { author, question, authedUser, isLoading, questionNotFound } = this.props
    if (isLoading) return <p>Loading...</p>
    if (questionNotFound) return <Redirect to="/404" />
    return (
      <div className="card">
        <div className="card-header flex-start">Asked by {author.name}</div>
        <div className="card-body">
          <div className="card-content">
            <div className="avatar-container avatar-container-big" style={{ backgroundImage: `url("${author.avatarURL}")` }}>
            </div>
          </div>
          <div className="card-content border-left flex-2 flex-start">
            <div className="question-list-item-body">
              {
                authedUser.answers[question.id] ? (
                  <AnsweredQuestionContent optionOne={question.optionOne} optionTwo={question.optionTwo} authedUserId={authedUser.id} />
                ) : (
                  <UnansweredQuestionContent question={question} authedUserId={authedUser.id} />
                )
              }
            </div>
          </div>
        </div>
      </div>
    )
  }  
}

const mapStateToProps = ({ authedUser, users, questions, loadingBar }, ownProps) => {
  const questionId = ownProps.match.params.id
  const question = questions[questionId] || null
  const isLoading = loadingBar.default
  if (!question) return { isLoading, questionNotFound: true }
  const author = users[question.author] || {}
  return {
    question,
    author,
    authedUser,
    isLoading
  }
}

export default connect(mapStateToProps)(Question)