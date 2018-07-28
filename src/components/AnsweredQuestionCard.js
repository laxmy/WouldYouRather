import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion} from '../actions/shared'
//Card import

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CircularProgress from '@material-ui/core/CircularProgress';
import Tick from '@material-ui/icons/Tick'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

class AnsweredQuestionCard extends Component{

  render(){
    const {question} = this.props

    return(
      <Card className='question-card'>
        <CardHeader>Would you Rather</CardHeader>
        <CardContent>
          <div>
            <Table>
              <TableRow>
                <TableCell><p>{ question.optionOne.text }</p></TableCell>
                <TableCell>
                  <CircularProgress  variant="static" value={5} />
                </TableCell>
                <TableCell><Tick/></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>  <p>{ question.optionTwo.text }</p> </TableCell>
                <TableCell>
                  <CircularProgress  variant="static" value={5} />
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </Table>
          </div>
        </CardContent>
      </Card>
    )
  }
}

function mapStateToProps({ authedUser, questions },props){

  return{
    authedUser: authedUser,
    question: questions[props.id]
  }
}
export default connect(mapStateToProps)(AnsweredQuestionCard)
