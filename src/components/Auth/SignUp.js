import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { handleSignup } from '../../actions/users'
import { useFormInput } from '../../hooks'

const SignUp = ({ dispatch, switchToLogin }) => {
  const username = useFormInput("")
  const name = useFormInput("")
  const password = useFormInput("")
  const confirmPassword = useFormInput("")

  const checkIfFormIsValid = () => (
    username.value && name.value && password.value && confirmPassword.value && password.value === confirmPassword.value
  )

  const handleSignupSubmit = () => {
    dispatch(handleSignup(username.value, name.value, password.value, switchToLogin))
  }

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
            {...username}
          />
          <input
            className="input-field"
            type="text"
            placeholder="Please type your name"
            {...name}
          />
          <input
            className="input-field"
            type="password"
            placeholder="Please type your password"
            {...password}
          />
          <input
            className="input-field"
            type="password"
            placeholder="Please type your password again"
            {...confirmPassword}
          />
          <button 
            className={"button button-submit" + (checkIfFormIsValid() ? "" : " disabled")}
            disabled={!checkIfFormIsValid()}
            onClick={handleSignupSubmit}
          >Sign up</button>
          <div className="margin-top cursor-pointer" onClick={switchToLogin}>
            Already have an account? Please Sign in
          </div>
        </div>
      </div>
    </div>
  )
}

SignUp.propTypes = {
  switchToLogin: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
}

/**
 * SignUp Component
 */
const SignUpComponent = connect()(SignUp)

export default SignUpComponent
