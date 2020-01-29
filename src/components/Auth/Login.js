import React from 'react'
import { connect } from 'react-redux'
import { handleLogin } from '../../actions/authedUser'
import { handleReceiveUsersForLogin } from '../../actions/users'

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleLogin = () => {
    const { username, password } = this.state
    this.props.dispatch(handleLogin(username, password))
  }

  checkIfFormIsValid = () => {
    const { username, password } = this.state
    return  username && password
  }

  handleLoginWithOriginalUsers = username => {
    this.props.dispatch(handleLogin(username, "1234"))
  }

  componentDidMount() {
    this.props.dispatch(handleReceiveUsersForLogin())
  }

  render() {
    const { users } = this.props
    return (
      <div className="card">
        <div className="card-header">
          <h3>Welcome to the Would You Rather App!</h3>
          <p>Please sign in to continue</p>
        </div>
        <div className="card-body">
          <div className="card-content">
            <h2 className="large main-color">Sign in</h2>
            <input
              className="input-field"
              type="text"
              placeholder="Please type your username"
              value={this.state.username}
              onChange={e => this.setState({ username: e.target.value })}
            />
            <input
              className="input-field"
              type="password"
              placeholder="Please type your password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
            <button 
              className={"button button-submit" + (this.checkIfFormIsValid() ? "" : " disabled")}
              disabled={!this.checkIfFormIsValid()}
              onClick={this.handleLogin}
            >Sign in</button>
            <div className="margin-top cursor-pointer" onClick={this.props.switchToSignUp}>
              Don't have an account? Plase Sign up!
            </div>
            <div className="options-separator margin-top">
              <div className="line flex-3"></div>
              <div className="flex-1 center bold">OR</div>
              <div className="line flex-3"></div>
            </div>
            <div className="margin-top" onClick={this.props.switchToSignUp}>
              Select one from the users below
            </div>
            <div className="original-users-container">
              {
                Object.keys(users).map(userId => (
                  <div 
                    className="original-user card margin-top padding cursor-pointer"
                    onClick={() => { this.handleLoginWithOriginalUsers(userId) }}
                    key={userId}>
                    <div className="avatar-container avatar-container-small" style={{ backgroundImage: `url("${users[userId].avatarURL}")` }}>
                    </div>
                    <div className="original-user-name">{users[userId].name}</div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users })

export default connect(mapStateToProps)(Login)
