import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const url = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    army: []
  }

  componentWillMount() {
    fetch(url).then(r => r.json()).then(json => this.setState({bots: json}))
  }

  addToArmy = (id) => {
    let myBot = this.state.bots.find(bot => bot.id == id)
    this.setState({
      bots: this.state.bots.filter(bot => bot.id != id),
      army: [myBot, ...this.state.army]
    })
  }

  removeFromArmy = (id) => {
    let myBot = this.state.army.find(bot => bot.id == id)
    this.setState({
      bots: [myBot, ...this.state.bots],
      army: this.state.army.filter(bot => bot.id != id)
    })
  }

  render() {
    console.log(this.state.bots)
    return (
      <div>
        <YourBotArmy removeFromArmy={this.removeFromArmy} army={this.state.army} />
        <BotCollection addToArmy={this.addToArmy} bots={this.state.bots} />
      </div>
    );
  }

}

export default BotsPage;
