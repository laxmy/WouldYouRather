import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Homepage from './components/Homepage';
import Question from './components/Question'
import { fetchInitialUsers, fetchInitialQuestions, setAuthedUserID } from './actions/shared';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';



class App extends Component {

  componentDidMount(){
    this.props.dispatch(fetchInitialUsers());
    this.props.dispatch(fetchInitialQuestions());
    setAuthedUserID(this.props.dispatch);
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Would you Rather
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Router>
          <div id="ToBeRemoved">
            <Route path='/' exact component={Homepage} />
            <Route path='/question/:id' component={Question} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
