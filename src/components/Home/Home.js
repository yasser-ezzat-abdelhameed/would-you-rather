import React from 'react'
import { connect } from 'react-redux'
import QuestionListItem from './QuestionListItem'

class Home extends React.Component {
  state = {
    activeTab: "unanswered-questions"
  }
  render() {
    const { activeTab } = this.state
    const { users, questions, unansweredQuestions, answeredQuestions, isLoading } = this.props
    if (isLoading) return <p>Loading...</p>
    return (
      <div className="card">
        <div className="tabs">
          <div 
            className={"tab" + (activeTab === "unanswered-questions" ? " active-tab" : " inactive-tab")}
            disabled={activeTab === "unanswered-questions"}
            onClick={() => this.setState({ activeTab: "unanswered-questions" })}
          >Unanswered Questions</div>
          <div 
            className={"tab" + (activeTab === "answered-questions" ? " active-tab" : " inactive-tab")}
            disabled={activeTab === "answered-questions"}
            onClick={() => this.setState({ activeTab: "answered-questions" })}
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

export default connect(mapStateToProps)(Home)
