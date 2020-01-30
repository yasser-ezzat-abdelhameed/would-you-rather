import React from 'react'
import PropTypes from 'prop-types'
import ResultItem from './ResultItem'

/**
 * AnsweredQuestionContent component
 */
const AnsweredQuestionContent = ({ optionOne, optionTwo, authedUserId }) => (
  <div>
    <h2>Results:</h2>
    <ResultItem 
      text={optionOne.text}
      optionVotesCount={optionOne.votes.length} 
      totalVotesCount={optionOne.votes.length + optionTwo.votes.length} 
      isYourVote={optionOne.votes.some(userId => userId === authedUserId)} />
    <ResultItem 
      text={optionTwo.text}
      optionVotesCount={optionTwo.votes.length} 
      totalVotesCount={optionOne.votes.length + optionTwo.votes.length} 
      isYourVote={optionTwo.votes.some(userId => userId === authedUserId)} />
  </div>
)

AnsweredQuestionContent.propTypes = {
  authedUserId: PropTypes.string.isRequired,
  optionOne: PropTypes.object.isRequired,
  optionTwo: PropTypes.object.isRequired
}

export default AnsweredQuestionContent
