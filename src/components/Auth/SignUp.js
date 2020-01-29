import React from 'react'
import { connect } from 'react-redux'
import { handleSignup } from '../../actions/users'

class SignUp extends React.Component {
  state = {
    username: "",
    name: "",
    password: "",
    confirmPassword: ""
  }

  checkIfFormIsValid = () => {
    const { username, name, password, confirmPassword } = this.state
    return  username && name && password && confirmPassword && password === confirmPassword
  }

  handleSignup = () => {
    const { dispatch, switchToLogin } = this.props
    const { username, name, password } = this.state
    dispatch(handleSignup(username, name, password, switchToLogin))
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h3>Welcome to the Would You Rather App!</h3>
          <p>Please sign in to continue</p>
        </div>
        <div className="card-body">
          <div className="card-content">
            <h2 className="large main-color">Sign up</h2>
            <input
              className="input-field"
              type="text"
              placeholder="Please type your username"
              value={this.state.username}
              onChange={e => this.setState({ username: e.target.value })}
            />
            <input
              className="input-field"
              type="text"
              placeholder="Please type your name"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
            <input
              className="input-field"
              type="password"
              placeholder="Please type your password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
            <input
              className="input-field"
              type="password"
              placeholder="Please type your password again"
              value={this.state.confirmPassword}
              onChange={e => this.setState({ confirmPassword: e.target.value })}
            />
            <button 
              className={"button button-submit" + (this.checkIfFormIsValid() ? "" : " disabled")}
              disabled={!this.checkIfFormIsValid()}
              onClick={this.handleSignup}
            >Sign up</button>
            <div className="margin-top cursor-pointer" onClick={this.props.switchToLogin}>
              Already have an account? Please Sign in
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(SignUp)
