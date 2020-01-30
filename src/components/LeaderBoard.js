import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const medals = [
  'https://image.flaticon.com/icons/png/512/625/625394.png',
  'https://image.flaticon.com/icons/png/512/625/625395.png',
  'https://image.flaticon.com/icons/png/512/625/625396.png'
]

const LeaderBoard = props => (
  <div>
    {
      props.users.map((user, index) => (
        <div className="card leader-board-item" key={user.id}>
          <div className="badge-container">
            <img src={medals[index]} alt={medals[index]} />
          </div>
          <div className="card-body">
            <div className="card-content">
              <div className="avatar-container" style={{ backgroundImage: `url("${user.avatarURL}")` }}>
              </div>
            </div>
            <div className="card-content border-left flex-2 flex-start">
              <div className="question-list-item-body">
                <div className="flex-1">
                  <h2>{user.name}</h2>
                </div>
              </div>
              <div className="question-list-item-body">
                <div className="flex-1">
                  <div className="leader-board-score-details-container">
                    <div className="leader-board-score-item border-bottom">
                      <p>Answered questions</p>
                      <p>{user.answeredQuestions}</p>
                    </div>
                    <div className="leader-board-score-item">
                      <p>Created questions</p>
                      <p>{user.askedQuestions}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content border-left">
              <div className="question-list-item-body">
                <div className="flex-1">
                  <div className="card">
                    <div className="card-header">
                      <p>Score</p>
                    </div>
                    <div className="card-content">
                      <div className="score">{user.score}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    }
  </div>
)

const mapStateToProps = state => {
  let users = { ...state.users }
  users = Object.keys(users).map(userId => {
    const user = users[userId]
    const askedQuestions = user.questions.length
    const answeredQuestions = Object.keys(user.answers).length
    const score = askedQuestions + answeredQuestions
    return {
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      score,
      askedQuestions,
      answeredQuestions
    }
  }).sort((a, b) => b.score - a.score).splice(0, 3)
  return {
    users
  }
}

LeaderBoard.propTypes = {
  users: PropTypes.array.isRequired
}

/**
 * LeaderBoard component
 */
const LeaderBoardComponent = connect(mapStateToProps)(LeaderBoard)

export default LeaderBoardComponent
