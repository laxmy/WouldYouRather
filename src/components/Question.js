import React, { Component } from 'react'
import { connect } from 'react-redux'

import AnsweredQuestionCard from './AnsweredQuestionCard'
import UnansweredQuestionCard from './UnansweredQuestionCard'

class Question extends Component {
    render() {
        const { question, hasAnswered } = this.props

        if(hasAnswered){
            return <AnsweredQuestionCard id={question.id}/>
        } else {
            return <UnansweredQuestionCard id={question.id}/>
        }
    }
}

function mapStateToProps({authedUser, users, questions}, props){

    const id = props.match.params.id
    const question = questions[id]
    const questionsAnsweredByAuthedUser = Object.keys(users[authedUser].answers)

    const hasAnswered = questionsAnsweredByAuthedUser.includes(id);

    return {
        hasAnswered,
        question
    }
}

export default connect(mapStateToProps)(Question)
