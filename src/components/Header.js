import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentPage } from '../actions/shared'
import { setAuthedUser } from '../actions/authedUser'

class Header extends React.Component {
  componentDidMount() {
    const currentPage = this.props.location.pathname.replace('/', '') || "home"
    this.props.dispatch(setCurrentPage(currentPage))
  }
  
  render() {
    const { authedUser, currentPage, dispatch } = this.props
    return (
      <div className="header">
        <div className="header-content">
          <div className="header-nav-section">
            <div className="header-nav-item-container">
              <Link 
                className={"header-nav-item" + (currentPage === "home" ? " active" : "")} 
                to="/"
                onClick={() => dispatch(setCurrentPage("home")) }
              >
                Home
              </Link>
            </div>
            <div className="header-nav-item-container">
              <Link 
                className={"header-nav-item" + (currentPage === "add" ? " active" : "")} 
                to="/add"
                onClick={() => dispatch(setCurrentPage("add")) }
              >
                New Question
              </Link>
            </div>
            <div className="header-nav-item-container">
              <Link 
                className={"header-nav-item" + (currentPage === "leaderboard" ? " active" : "")} 
                to="/leaderboard"
                onClick={() => dispatch(setCurrentPage("leaderboard")) }
              >
                Leader Board
              </Link>
            </div>
          </div>
          {
            authedUser ? (
              <div className="header-user-section">
                <div className="header-user-info">
                  <div>Hello, {authedUser.name}</div>
                  <div className="avatar-container avatar-container-small" style={{ backgroundImage: `url("${authedUser.avatarURL}")` }}>
                  </div>
                </div>
                <div className="header-logout-button" onClick={() => dispatch(setAuthedUser(null))}>Logout</div>
              </div>
            ) : null
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentPage, authedUser }) => ({ currentPage, authedUser })

export default connect(mapStateToProps)(withRouter(Header))
