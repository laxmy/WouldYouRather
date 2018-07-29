import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setAuthedUserID } from '../actions/shared'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'


class Navbar extends Component{
  state = {
   anchorEl: null,
 }

 handleClick = event => {
   this.setState({ anchorEl: event.currentTarget })
 }

 handleClose = () => {
   this.setState({ anchorEl: null });
 }

 handleLogout=()=>{
   setAuthedUserID(null,this.props.dispatch)
   this.handleClose()
 }
  render(){
    const { anchorEl } = this.state;
    return (
        <AppBar position="static" color="primary" className="nav-bar" >
          <Toolbar className="container">
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
                <Button className="loggedIn-icon"
                  aria-owns={anchorEl ? 'simple-menu' : null}
                  aria-haspopup="true"
                  onClick={this.handleClick}>
                  <Avatar
                    alt={this.props.loggedInUser.name}
                    src={this.props.loggedInUser.avatarURL}
                    />
                </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}>
                    <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                  </Menu>
              </div>
              :  <Link to='/login'>
                  <Button className="loggedIn-icon" color="secondary">Login</Button>
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
