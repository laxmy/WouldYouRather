import React, { Component,Fragment  } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';

import Homepage from './components/Homepage'
import Question from './components/Question'
import NewQuestion from './components/NewQuestion'
import LeaderBoard from './components/LeaderBoard'
import Navbar from './components/Navbar'

import { fetchInitialUsers, fetchInitialQuestions, setAuthedUserID } from './actions/shared';


class App extends Component {

  componentDidMount(){
    this.props.dispatch(fetchInitialUsers());
    this.props.dispatch(fetchInitialQuestions());
    setAuthedUserID(this.props.dispatch);
  }

  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <div id="ToBeRemoved">
                <Route path='/' exact component={Homepage} />
                <Route path='/question/:id' component={Question} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/leaderboard' component={LeaderBoard}/>
              </div>
            </Switch>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
