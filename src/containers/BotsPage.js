import React from "react";

import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    myBots: [],
    bots: []
  }

  fetch = () => {
    fetch(URL)
      .then(response => response.json())
      .then(bots => this.setState({
        bots: bots
      }))
  }

  componentDidMount(){
    this.fetch()
  }

  addBot = (addingBot) => {
    // console.log('in addBot');
    if(!this.state.myBots.includes(addingBot)){
      this.setState({
        myBots: [...this.state.myBots, addingBot]
      })
    }
  }

  deleteBot = (deletingBot) => {
    // console.log('in deleteBot');
    const index = this.state.myBots.indexOf(deletingBot)
    const newArray = [...this.state.myBots]
    newArray.splice(index, 1)
    this.setState({
      myBots: newArray
    })
  }


  render() {

    // console.log(this.state.bots);
    console.log(this.state.myBots);

    return (
      <div>
        <YourBotArmy myBots={this.state.myBots} deleteBot={this.deleteBot}/>
        <BotCollection bots={this.state.bots} addBot={this.addBot} />
      </div>
    );
  }

}

export default BotsPage;
