import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions' 
class NewQuestion extends React.Component {
  state = {
    optionOne: "",
    optionTwo: ""
  }

  handleAddQuestion = e => {
    e.preventDefault()
    const { dispatch, authedUserId, history } = this.props
    const { optionOne, optionTwo } = this.state
    dispatch(handleAddQuestion(optionOne, optionTwo, authedUserId, () => { history.push('/') }))
  }

  checkIfFormIsValid = () => {
    const { optionOne, optionTwo } = this.state
    return optionOne && optionTwo
  }
  
  render() {
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
                value={this.state.optionOne}
                onChange={e => this.setState({ optionOne: e.target.value })}
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
                value={this.state.optionTwo}
                onChange={e => this.setState({ optionTwo: e.target.value })}
              />
              <button 
                className={"button button-submit" + (this.checkIfFormIsValid() ? "" : " disabled")}
                disabled={!this.checkIfFormIsValid()}
                onClick={this.handleAddQuestion}
              >Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({ authedUserId: authedUser.id })

export default connect(mapStateToProps)(withRouter(NewQuestion))
