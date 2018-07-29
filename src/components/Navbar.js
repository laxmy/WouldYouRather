import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link,Redirect } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'


class Navbar extends Component{
  render(){
    return (
        <AppBar position="static" color="primary" className="nav-bar" >
          <Toolbar>
            <Typography variant="title" color="inherit" className="title">
              Would you Rather
            </Typography>
            {this.props.loggedInUser ?
              <div>
                <Link to='/'>
                  <Button color="secondary">Home</Button>
                </Link>
                <Link to='/leaderboard'>
                  <Button color="secondary">LeaderBoard</Button>
                </Link>
                <Button>
                  <Avatar
                    alt={this.props.loggedInUser.name}
                    src={this.props.loggedInUser.avatarURL}
                    />
                </Button>
              </div>
              :  <Link to='/login'>
                  <Button color="secondary">Login</Button>
                </Link>
            }

          </Toolbar>
        </AppBar>
    );
  }
}

function mapStateToProps({authedUser, users}){
  return{
    loggedInUser: users[authedUser],
  }
}
export default connect(mapStateToProps)(Navbar)
