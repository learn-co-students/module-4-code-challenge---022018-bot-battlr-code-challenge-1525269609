import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  constructor(){
    super()
    this.state = {
      bots: [],
      yourBots: []
    }
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(res => this.setState({
      bots: res
    }))
  }

  enlist = (bot) => {
    if (!this.state.yourBots.includes(bot)){
      this.setState({
        yourBots: [...this.state.yourBots, bot]
      })
    }
  }

  dismiss = (bot) => {
    this.setState({
      yourBots: this.state.yourBots.filter(x => x.id !== bot.id)
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.yourBots} toggle={this.dismiss}/>
        <BotCollection bots={this.state.bots} toggle={this.enlist} />
      </div>
    );
  }

}

export default BotsPage;
