import { _getUsers,_getQuestions,_saveQuestionAnswer } from '../helpers/_DATA'
import { getUsers,updateUserAnswer } from './users'
import{ getQuestions,answerQuestion } from './questions'
import { setAuthedUser } from './authedUser'


const AUTHED_USERID ="johndoe";

//Return a function as redux thunk expects which on resolving will dispatch the actions to reducers
export function fetchInitialUsers(){
  return (dispatch) => {
    _getUsers().then(users => {dispatch(getUsers(users))})
  }
}

export function fetchInitialQuestions(){
  return (dispatch) => {
    _getQuestions().then(questions => { dispatch(getQuestions(questions)) })
  }
}

export function setAuthedUserID(dispatch){
   dispatch(setAuthedUser(AUTHED_USERID));
}

export function handleAnswerQuestion(info){
  return (dispatch) =>{
      dispatch(answerQuestion(info))
      dispatch(updateUserAnswer(info))

    return _saveQuestionAnswer(info)
      .then((questions) => {
        dispatch(fetchInitialQuestions(questions))
      })
  }
}
