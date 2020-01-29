import React from 'react'
import ResultItem from './ResultItem'

export default props => (
  <div>
    <h2>Results:</h2>
    <ResultItem 
      text={props.optionOne.text}
      optionVotesCount={props.optionOne.votes.length} 
      totalVotesCount={props.optionOne.votes.length + props.optionTwo.votes.length} 
      isYourVote={props.optionOne.votes.some(userId => userId === props.authedUserId)} />
    <ResultItem 
      text={props.optionTwo.text}
      optionVotesCount={props.optionTwo.votes.length} 
      totalVotesCount={props.optionOne.votes.length + props.optionTwo.votes.length} 
      isYourVote={props.optionTwo.votes.some(userId => userId === props.authedUserId)} />
  </div>
)