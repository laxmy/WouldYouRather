import { RECEIVE_QUESTIONS,ANSWER_QUESTION,ADD_QUESTION } from '../actions/questions'

export default function questions(state ={}, action){
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {...state, ...action.questions}
    case ANSWER_QUESTION:
      const answerOption = action.answer
      return {
        ...state,
        [action.qid]:{
          ...state[action.qid],
          [answerOption] :{
            ...state[action.qid][answerOption],
            votes: state[action.qid][answerOption].votes.concat(action.authedUser)
          }
        }
      }
    case ADD_QUESTION:
    return {
         ...state,
         [action.question.id]: action.question
      }
    default:
      return state;
  }
}
