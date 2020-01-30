import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

/**
 * Auth component
 */
const Auth = () => {
  const [authPage, setAuthPage] = useState("login")

  const toggleAuthPage = () => {
    setAuthPage(authPage === "login" ? "signup" : "login")
  }

  return (
    <div>
    {
      authPage === "login" ? (
        <Login switchToSignUp={toggleAuthPage}/>
      ) : (
        <SignUp switchToLogin={toggleAuthPage}/>
      )
    }
    </div>
  )
}

export default Auth
