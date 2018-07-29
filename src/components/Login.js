import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUserID } from '../actions/shared'
import { Redirect} from 'react-router-dom'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'

class Login extends Component{
  state = {
  checked: '',
}

handleToggle = value => () => {
  this.setState({
    checked: value
  })
}

handleSignIn =()=>{
 setAuthedUserID(this.state.checked,this.props.dispatch)

 this.setState({
   toHome: true
 })
}

  render(){
    if (this.state.toHome === true) {
     return <Redirect to='/' />
    }
    return (
      <Card className='question-card'>
      <List>
         {this.props.users.map(user => (
           <ListItem key={user.id} dense button >
             <Avatar alt={user.name} src={user.avatarURL} />
             <ListItemText primary={user.name} />
             <ListItemSecondaryAction>
               <Checkbox
                 onChange={this.handleToggle(user.id)}
                 checked={this.state.checked === user.id}
               />
             </ListItemSecondaryAction>
           </ListItem>
         ))}
       </List>
       <Button color="secondary" type="submit" onClick={this.handleSignIn} disabled={!this.state.checked}>LOGIN</Button>
      </Card>
    )
  }
}

function mapStateToProps({ users }){
 return {users: Object.keys(users).map(key=> users[key])}
}

export default connect(mapStateToProps)(Login);
