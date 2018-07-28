import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion} from '../actions/shared'
//Card import

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'

class NewQuestion extends Component{
  state={
    optionOne:'',
    optionTwo:''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(handleAddQuestion(
      {
      optionOneText: this.state.optionOne,
      optionTwoText: this.state.optionTwo,
      authorId:this.props.authedUser}))
  }

  handleChange = event => {
    event.preventDefault()
    const text = event.target.value
    this.setState({
      [event.target.id]: text
    })
  }

  render(){
    return(
      <Card className='question-card'>
        <CardHeader title="Complete the Question"></CardHeader>
        <CardContent>
          <h3>Would you Rather</h3>
          <Divider/>
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
             <TextField
               id="optionOne"
               label="Option One"
               value={this.state.optionOne}
               onChange={this.handleChange}
               fullWidth
               margin="normal"
             />
             <TextField
               id="optionTwo"
               label="Option Two"
               value={this.state.optionTwo}
               onChange={this.handleChange}
               fullWidth
               margin="normal"
             />
             <Button type='submit' color="secondary" disabled={this.state.optionOne === '' || this.state.optionTwo === ''}>SUBMIT</Button>
           </form>
        </CardContent>
      </Card>
    )
  }
}

function mapStateToProps({authedUser}){
  return{
    authedUser: authedUser
  }

}
export default connect(mapStateToProps)(NewQuestion)
