import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import AnsweredQuestionCard from './AnsweredQuestionCard'
import UnansweredQuestionCard from './UnansweredQuestionCard'

class Question extends Component {
    render() {
        const { question, hasAnswered,authedUser } = this.props
        if(authedUser){
          if(hasAnswered){
                  return <AnsweredQuestionCard id={question.id}/>
              } else {
                  return <UnansweredQuestionCard id={question.id}/>
          }
        }
        else{
          return <Redirect to="/login"></Redirect>
        }

    }
}

function mapStateToProps({authedUser, users, questions}, props){

    const id = props.match.params.id
    const question = questions[id]
    const questionsAnsweredByAuthedUser = authedUser && Object.keys(users[authedUser].answers)
    const hasAnswered = authedUser && questionsAnsweredByAuthedUser.includes(id);

    return {
        hasAnswered,
        question,
        authedUser
    }
}

export default connect(mapStateToProps)(Question)
