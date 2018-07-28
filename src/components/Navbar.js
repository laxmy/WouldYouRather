import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'

class Navbar extends Component{
  render(){
    return (
        <AppBar position="static" color="primary" className="nav-bar" >
          <Toolbar>
            <Typography variant="title" color="inherit" className="title">
              Would you Rather
            </Typography>
            <Link to='/leaderboard'><Button>LeaderBoard</Button></Link>
            <Button><Avatar
              alt="Hobbes"
              src="../Mom.jpg"
              /></Button>
          </Toolbar>
        </AppBar>
    );
  }
}
export default Navbar
