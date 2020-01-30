import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import QuestionListItem from './QuestionListItem'

const Home = ({ users, questions, unansweredQuestions, answeredQuestions, isLoading }) => {
  const [activeTab, setActiveTab] = useState("unanswered-questions")

  const handleTabClick = (val) => {
    setActiveTab(val)
  }

  if (isLoading) return <p>Loading...</p>
  
  return (
    <div className="card">
      <div className="tabs">
        <div 
          className={"tab" + (activeTab === "unanswered-questions" ? " active-tab" : " inactive-tab")}
          disabled={activeTab === "unanswered-questions"}
          onClick={handleTabClick.bind(this, "unanswered-questions")}
        >Unanswered Questions</div>
        <div 
          className={"tab" + (activeTab === "answered-questions" ? " active-tab" : " inactive-tab")}
          disabled={activeTab === "answered-questions"}
          onClick={handleTabClick.bind(this, "answered-questions")}
        >Answered Questions</div>
      </div>
      <div className="questions-list">
        {
          activeTab === "unanswered-questions" ? (
            unansweredQuestions.length ? (
              unansweredQuestions.map(questionId => (
                <QuestionListItem key={questionId} question={questions[questionId]} user={users[questions[questionId].author]} />
              ))
            ) : (
              <p className="center">You have answered all questions</p>
            )
          ) : (
            answeredQuestions.length ? (
              answeredQuestions.map(questionId => (
                <QuestionListItem key={questionId} question={questions[questionId]} user={users[questions[questionId].author]} />
              ))
            ) : (
              <p className="center">You have not answered any questions yet</p>
            )
          )
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const authedUser = state.authedUser
  const users = state.users
  const questions = Object.keys(state.questions).sort((a, b) => state.questions[b].timestamp - state.questions[a].timestamp)
  const unansweredQuestions = questions.filter(questionId => !authedUser.answers[questionId])
  const answeredQuestions = questions.filter(questionId => authedUser.answers[questionId])
  const isLoading = state.loadingBar.default
  return {
    users,
    questions: state.questions,
    unansweredQuestions,
    answeredQuestions,
    isLoading
  }
}

Home.propTypes = {
  users: PropTypes.object.isRequired,
  questions: PropTypes.object.isRequired,
  unansweredQuestions: PropTypes.array.isRequired,
  answeredQuestions: PropTypes.array.isRequired,
  isLoading: PropTypes.number.isRequired
}

/**
 * Home component
 */
const HomeComponent = connect(mapStateToProps)(Home)

export default HomeComponent
