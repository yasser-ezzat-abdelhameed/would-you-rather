import React from 'react'

export default props => (
  <div className={"card question-result-item" + (props.isYourVote ? " your-vote" : "")}>
    {
      props.isYourVote ? <div className="your-vote-badge"><span>Your vote</span></div> : null
    }
    <h4 className="option-text">Would you rather {props.text}?</h4>
    <div className="progress-bar">
      <div className="progress" style={{ width: `${props.optionVotesCount * 100 / props.totalVotesCount}%` }}></div>
    </div>
    <div className="result-text">
      {props.optionVotesCount} out of {props.totalVotesCount}
    </div>
  </div>
)
