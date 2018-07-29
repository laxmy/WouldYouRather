import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Avatar from '@material-ui/core/Avatar'

class LeaderBoard extends Component{

  render(){
    if(this.props.authedUser){
      let users = this.props.users
      return (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Questions Asked</TableCell>
              <TableCell>Questions Answered</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          { users && users.map(user => (
            <TableRow>
              <TableCell><Avatar alt={user.name} src={user.avatarURL}/>{user.name}</TableCell>
              <TableCell>{user.questions.length}</TableCell>
              <TableCell>{Object.keys(user.answers).length}</TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>)
    }
    else{
      return <Redirect to="/login"></Redirect>
    }
  }
}

function mapStateToProps({users,authedUser}){
  let rawUserList =Object.keys(users).map(key=> users[key]);
  return{
    users: rawUserList.sort((a, b)=>{ calculatePerformance(b)-calculatePerformance(a)}),
    authedUser: authedUser
  }
}
function calculatePerformance(user){
  return user.questions.length + Object.keys(user.answers).length
}
export default connect(mapStateToProps)(LeaderBoard)
