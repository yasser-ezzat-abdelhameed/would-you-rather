import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { handleLogin } from '../../actions/authedUser'
import { handleReceiveUsersForLogin } from '../../actions/users'
import { useFormInput } from '../../hooks'

const Login = ({ dispatch, users, switchToSignUp }) => {
  const username = useFormInput("")
  const password = useFormInput("")

  useEffect(() => {
    dispatch(handleReceiveUsersForLogin())
  }, [])

  const handleLoginSubmit = () => {
    dispatch(handleLogin(username.value, password.value))
  }

  const checkIfFormIsValid = () => username.value && password.value

  const handleLoginWithOriginalUsers = username => {
    dispatch(handleLogin(username, "1234"))
  }

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
            {...username}
          />
          <input
            className="input-field"
            type="password"
            placeholder="Please type your password"
            {...password}
          />
          <button 
            className={"button button-submit" + (checkIfFormIsValid() ? "" : " disabled")}
            disabled={!checkIfFormIsValid()}
            onClick={handleLoginSubmit}
          >Sign in</button>
          <div className="margin-top cursor-pointer" onClick={switchToSignUp}>
            Don't have an account? Plase Sign up!
          </div>
          <div className="options-separator margin-top">
            <div className="line flex-3"></div>
            <div className="flex-1 center bold">OR</div>
            <div className="line flex-3"></div>
          </div>
          <div className="margin-top" onClick={switchToSignUp}>
            Select one from the users below
          </div>
          <div className="original-users-container">
            {
              Object.keys(users).map(userId => (
                <div 
                  className="original-user card margin-top padding cursor-pointer"
                  onClick={() => { handleLoginWithOriginalUsers(userId) }}
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

const mapStateToProps = ({ users }) => ({ users })

Login.propTypes = {
  users: PropTypes.object.isRequired,
  switchToSignUp: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
}

/**
 * Login component
 */
const LoginComponent = connect(mapStateToProps)(Login)

export default LoginComponent
