import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/**
 * QuestionListItem component
 */
const QuestionListItem =  ({ question, user }) => (
  <div className="card question-list-item">
    <div className="card-header flex-start">{user.name} asks:</div>
    <div className="card-body">
      <div className="card-content">
        <div className="avatar-container" style={{ backgroundImage: `url("${user.avatarURL}")` }}>
        </div>
      </div>
      <div className="card-content border-left flex-2 flex-start">
        <div className="question-list-item-body">
          <div className="flex-1">
            <h3>Would you rather</h3>
          </div>
          <div className="flex-1">
            <p>{question.optionOne.text}</p>
          </div>
          <div className="flex-1">
            <Link className="button" to={`/questions/${question.id}`}>View Poll</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

QuestionListItem.propTypes = {
  question: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default QuestionListItem
