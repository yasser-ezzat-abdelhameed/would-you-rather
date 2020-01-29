import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleReceiveData } from '../actions/shared'
import Home from './Home/Home'
import Question from './Question/Question'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import PageNotFound from './PageNotFound'

class Main extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveData())
  }
  
  render() {
    return (
      <Switch>
        <Route path="/" exact render={ () => <Home /> } />
        <Route path="/add" exact render={ () => <NewQuestion /> } />
        <Route path="/leaderboard" exact render={ () => <LeaderBoard /> } />
        <Route path="/questions/:id" exact render={ ({ match }) => <Question match={match} /> } />
        <Route path="/404" exact render={ () => <PageNotFound /> } />
        <Redirect to="/" />
      </Switch>
    )
  }
}

export default connect()(Main)
