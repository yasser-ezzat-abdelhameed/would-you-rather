import React from 'react'
import Login from './Login'
import SignUp from './SignUp'

class Auth extends React.Component {
  state = {
    authPage: "login"
  }

  toggleAuthPage = () => {
    this.setState(prevState => ({
      ...prevState,
      authPage: prevState.authPage === "login" ? "signup" : "login"
    }))
  }

  render() {
    return (
      <div>
      {
        this.state.authPage === "login" ? (
          <Login switchToSignUp={this.toggleAuthPage}/>
        ) : (
          <SignUp switchToLogin={this.toggleAuthPage}/>
        )
      }
      </div>
    )
  }
}

export default Auth
