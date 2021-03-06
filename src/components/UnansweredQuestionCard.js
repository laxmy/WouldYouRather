import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion} from '../actions/shared'
//Card import
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'


class UnansweredQuestionCard extends Component{
  state={}

  handleSubmit = (e) =>{
    e.preventDefault()
    const { dispatch } = this.props

    dispatch(handleAnswerQuestion(
      {
      authedUser:this.props.authedUser,
      qid: this.props.question.id,
      answer:this.state.answerOption
    }))

  }

  handleChange = event => {
    this.setState({ answerOption: event.target.value })
  }

  render(){
    const {question} = this.props


    return(
      <Card className='question-card'>
        <CardHeader className="card-header" title="Would You Rather" avatar={
            <Avatar alt={this.props.author.name} src={this.props.author.avatarURL}/>}
            subheader={`Posted By ${this.props.author.name}`}/>
        <CardContent>
            <FormControl component="fieldset" >
              <RadioGroup value={this.state.answerOption}  onChange={this.handleChange}>
                <FormControlLabel value="optionOne" control={<Radio />}  label={ question.optionOne.text } />
                <FormControlLabel value="optionTwo" control={<Radio />} label={ question.optionTwo.text } />
              </RadioGroup>
              <Button variant="contained" color="secondary" onClick={this.handleSubmit} disabled={!this.state.answerOption || this.state.answerOption.Length <= 0}>Submit</Button>
            </FormControl>
        </CardContent>
      </Card>
    )
  }
}

function mapStateToProps({ authedUser, questions, users },{ id }){

  return{
    authedUser: authedUser,
    question: questions[id],
    author: users[questions[id].author]
  }
}
export default connect(mapStateToProps)(UnansweredQuestionCard)
