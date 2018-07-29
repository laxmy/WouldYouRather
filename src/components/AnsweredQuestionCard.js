import React, { Component } from 'react'
import { connect } from 'react-redux'
//Card import

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CircularProgress from '@material-ui/core/CircularProgress'
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Avatar from '@material-ui/core/Avatar'
import Tooltip from '@material-ui/core/Tooltip'
import {getPollPercentage} from '../helpers/utils'

class AnsweredQuestionCard extends Component{

  render(){
    const {question} = this.props
    let optionOnePoll = getPollPercentage("optionOne",question);
    let optionTwoPoll = getPollPercentage("optionTwo",question);
    return(
      <Card className='question-card'>
        <CardHeader title="Would You Rather" className="card-header" avatar={
            <Avatar alt={this.props.author.name} src={this.props.author.avatarURL}/>
          } subheader={`Posted By ${this.props.author.name}`}/>

        <CardContent>

<div>
  <p>
    {question.optionOne.text}
    <span className="user-option">{question.optionOne.votes.indexOf(this.props.authedUser)>= 0 ?<DoneOutlinedIcon color="primary"/>:null}</span>
  </p>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <Tooltip title={`${optionOnePoll.percentage}%`}>
            <CircularProgress  variant="static" size={30} thickness={5} value={optionOnePoll.percentage}>
            </CircularProgress></Tooltip>
          </TableCell>
          <TableCell>
            {`Voted By ${optionOnePoll.text}`}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
</div>
<div>
  <p>
    {question.optionTwo.text}
    <span className="user-option" >{question.optionTwo.votes.indexOf(this.props.authedUser)>= 0 ?<DoneOutlinedIcon color="primary"/>:null}</span>
  </p>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <Tooltip title={`${optionTwoPoll.percentage}%`}>
            <CircularProgress  variant="static" size={30} thickness={5} value={optionTwoPoll.percentage}>
            </CircularProgress></Tooltip>
          </TableCell>
          <TableCell>
            {`Voted By ${optionTwoPoll.text}`}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
</div>

</CardContent>
</Card>
    )
  }
}

function mapStateToProps({ authedUser, questions, users },props){

  return{
    authedUser: authedUser,
    question: questions[props.id],
    author: users[questions[props.id].author]
  }
}
export default connect(mapStateToProps)(AnsweredQuestionCard)
