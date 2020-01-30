import React, { useEffect } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { handleReceiveData } from '../actions/shared'
import Home from './Home/Home'
import Question from './Question/Question'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import PageNotFound from './PageNotFound'

const Main = props => {
  useEffect(() => {
    props.dispatch(handleReceiveData())
  }, [])
  
  return (
    <Switch>
      <Route path="/" exact render={ () => <Home /> } />
      <Route path="/add" exact render={ () => <NewQuestion /> } />
      <Route path="/leaderboard" exact render={ () => <LeaderBoard /> } />
      <Route path="/questions/:id" exact render={ ({ match }) => <Question match={match} /> } />
      <Route path="/404" exact render={ () => <PageNotFound /> } />
      <Redirect to="/404" />
    </Switch>
  )
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired
}

/**
 * Main component
 */
const MainComponent = connect()(Main)

export default MainComponent
