import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Auth from './Auth/Auth'
import Header from './Header'
import Main from './Main'

class App extends Component {
  render() {
    const { authedUser } = this.props
    return (
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <LoadingBar />
          <div className="page-container">
            <div className="page">
              {
                authedUser ? (
                  <Main />
                ) : (
                  <Auth />
                )
              }
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    authedUser: state.authedUser
  }
}

export default connect(mapStateToProps)(App);
