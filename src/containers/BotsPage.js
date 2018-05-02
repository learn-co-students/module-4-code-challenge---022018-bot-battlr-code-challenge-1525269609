import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

const url = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {

  state = {
    bots: [],
    army: [],
    view: "all"
  }

  componentWillMount() {
    fetch(url).then(r => r.json()).then(json => this.setState({bots: json}))
  }

  specView = (id) => {
    let myBot = this.state.bots.find(bot => bot.id == id)
    this.setState({
      view: myBot
    })
  }

  allView = () => {
    this.setState({view: "all"})
  }

  addToArmy = (id) => {
    let myBot = this.state.bots.find(bot => bot.id == id)
    this.setState({
      army: [myBot, ...this.state.army],
      view: "all"
    })
  }

  removeFromArmy = (id) => {
    this.setState({
      army: this.state.army.filter(bot => bot.id != id)
    })
  }

  render() {


    return (
      <div>
        <YourBotArmy removeFromArmy={this.removeFromArmy} army={this.state.army} />
        {this.state.view === "all" ? <BotCollection specView={this.specView} bots={this.state.bots} /> : <BotSpecs allView={this.allView} addToArmy={this.addToArmy} data={this.state.view} />}
      </div>
    )
  }

}

export default BotsPage;
