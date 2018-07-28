import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion} from '../actions/shared'
//Card import

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CircularProgress from '@material-ui/core/CircularProgress'
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Avatar from '@material-ui/core/Avatar'

class AnsweredQuestionCard extends Component{

  render(){
    const {question} = this.props

    return(
      <Card className='question-card'>
        <CardHeader title="Would You Rather" className="card-header" avatar={
            <Avatar alt={this.props.author.name} src={this.props.author.avatarURL}/>
          } subheader={`Posted By ${this.props.author.name}`}/>

        <CardContent>
          <div>
            <Table>
              <TableHead className="table-header">
                <TableRow>
                  <TableCell>Option</TableCell>
                  <TableCell>Polls</TableCell>
                  <TableCell> Your answer</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell><p>{ question.optionOne.text }</p></TableCell>
                  <TableCell>
                    <CircularProgress  variant="static" value={5} />
                  </TableCell>
                  <TableCell> <DoneOutlinedIcon /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>  <p>{ question.optionTwo.text }</p> </TableCell>
                  <TableCell>
                    <CircularProgress  variant="static" value={5} />
                  </TableCell>
                  <TableCell></TableCell>
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
