export function  getPollPercentage(option,question){
    let totalPolls = question.optionOne.votes.length + question.optionTwo.votes.length
    let percent = question[option].votes.length > 0? (question[option].votes.length/totalPolls)*100: 0;
    return {
      text:`${question[option].votes.length} out of ${totalPolls} users`,
      percentage: percent
    }
  }
