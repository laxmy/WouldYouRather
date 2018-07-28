import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//List import
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';



class Homepage extends Component{
  state = {
      value: 'unanswered',
    };

  toggleTab = (event, value) =>{
   this.setState({ value })
  }
  //// TODO: change these two functions
  getUnansweredList(){
    return this.props.questions.filter(q => q.optionOne.votes.includes(this.props.authedUser)||q.optionTwo.votes.includes(this.props.authedUser));
  }
  getAnsweredList(){
    return this.props.questions.filter(q => !(q.optionOne.votes.includes(this.props.authedUser)||q.optionTwo.votes.includes(this.props.authedUser)));
  }

  render(){
    let listOfQuestions = this.state.value ==="unanswered" ? this.getUnansweredList() : this.getAnsweredList();
    return (
      <div>
        <Paper>
          <Tabs
            value={this.state.value}
            onChange={this.toggleTab}
            indicatorColor="primary"
            textColor="primary"
            centered>
            <Tab label="Answered" value="answered"/>
            <Tab label="Unanswered" value="unanswered"/>
          </Tabs>
        </Paper>
        <List>
          {listOfQuestions && listOfQuestions.map(q => (
            <ListItem key ={q.id} >
                <Paper className='roomy-listItem'>
                  <Link to={`/question/${q.id}`}>
                   <ListItemText>
                      <p>
                        { q.optionOne.text }
                        <strong className='option-separator'> OR </strong>
                        { q.optionTwo.text }
                      </p>
                    </ListItemText>
                  </Link>
                </Paper>

            </ListItem>
          ))}
        </List>
     </div>
    );
  }
}
function mapStateToProps({ questions, authedUser }){
 return {questions: Object.keys(questions).map(key=> questions[key]),authedUser};
}

export default connect(mapStateToProps)(Homepage);
