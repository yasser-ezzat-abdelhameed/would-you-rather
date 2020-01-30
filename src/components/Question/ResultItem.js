import React from 'react'
import PropTypes from 'prop-types'

/**
 * ResultItem component
 */
const ResultItem = ({ isYourVote, text, optionVotesCount, totalVotesCount }) => (
  <div className={"card question-result-item" + (isYourVote ? " your-vote" : "")}>
    {
      isYourVote ? <div className="your-vote-badge"><span>Your vote</span></div> : null
    }
    <h4 className="option-text">Would you rather {text}?</h4>
    <div className="progress-bar">
      <div className="progress" style={{ width: `${optionVotesCount * 100 / totalVotesCount}%` }}></div>
    </div>
    <div className="result-text">
      {optionVotesCount} out of {totalVotesCount}
    </div>
  </div>
)

ResultItem.propTypes = {
  isYourVote: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  optionVotesCount: PropTypes.number.isRequired,
  totalVotesCount: PropTypes.number.isRequired
}

export default ResultItem
