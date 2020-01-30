import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LoadingBar from 'react-redux-loading-bar'
import Auth from './Auth/Auth'
import Header from './Header'
import Main from './Main'

const App = ({ authedUser }) => (
  <BrowserRouter>
    <div className="app-container">
      <Header />
      <LoadingBar />
      <div className="page-container">
        <div className="page">
          { authedUser ? <Main /> : <Auth /> }
        </div>
      </div>
    </div>
  </BrowserRouter>
)

const mapStateToProps = ({ authedUser }) => ({ authedUser })

App.propTypes = {
  authedUser: PropTypes.object
}

/**
 * App component
 */
const AppComponent = connect(mapStateToProps)(App)

export default AppComponent
