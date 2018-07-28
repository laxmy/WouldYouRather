import React, { Component } from 'react'
import { connect } from 'react-redux'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'

class LeaderBoard extends Component{
  render(){
    let users = this.props.users;
    return (
      <List>
      { users && users.map(user => (
        <ListItem key ={user.id} >
            <Paper className='roomy-listItem'>
               <ListItemText>
                  <p>
                  {user.id}
                  </p>
                </ListItemText>
            </Paper>

        </ListItem>
      ))}
    </List>);
  }
}

function mapStateToProps({users,authedUser}){
  return{
    users: Object.keys(users).map(key=> users[key]),
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(LeaderBoard)
