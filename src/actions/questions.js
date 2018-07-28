export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION"


export function getQuestions(questions){
  return{
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function answerQuestion({authedUser, qid, answer}){
  return{
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}
