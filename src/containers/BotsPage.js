import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
const url = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

export default class BotsPage extends React.Component {
  state = {
    bots: [],
    army:[]
  }

  componentDidMount() {
    fetch(url).then(x => x.json()).then(json => this.setState({ bots: json }))
  }

  adds = (x) => {
    (!this.state.army.includes(x)) ? this.setState({ army: [...this.state.army, x] }) : console.log("Already enlisted")
  }

  remove = (x) => {
    this.setState ({ army: this.state.army.filter(bot => { return bot.id !== x.id }) })
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} remove={this.remove} />
        <BotCollection bots={this.state.bots} adds={this.adds} />
      </div>
    )
  }
}
