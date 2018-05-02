import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  constructor(){
    super()
    this.state = {
      bots: [],
      yourBots: [],
      selectedBot: null
    }
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(res => this.setState({
      bots: res
    }))
  }

  selectBot = (bot) => {
    this.setState({
      selectedBot: bot
    })
  }

  deselectBot = () => {
    this.setState({
      selectedBot: null
    })
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
        <YourBotArmy bots={this.state.yourBots} selectBot={this.selectBot} />
        {
          this.state.selectedBot ?
          <BotSpecs
            bot={this.state.selectedBot}
            enlist={this.enlist}
            dismiss={this.dismiss}
            deselectBot={this.deselectBot}
            enlisted={this.state.yourBots.includes(this.state.selectedBot)}
          /> :
          <BotCollection bots={this.state.bots} selectBot={this.selectBot} />
        }
      </div>
    )
  }

}

export default BotsPage
