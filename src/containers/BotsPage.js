import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
import BotFilter from '../components/BotFilter'

const url = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {

  state = {
    allBots: [],
    bots: [],
    army: [],
    view: "all",
    class: "all",
    sort: "health"
  }

  componentWillMount() {
    fetch(url).then(r => r.json()).then(json => this.setState({
      allBots: json,
      bots: json
    }))
  }

  sort = () => {
    let newBots = this.state.allBots
    if (this.state.class !== "all") {
      newBots = newBots.filter(bot => bot.bot_class === this.state.class)
    }
    switch (this.state.sort) {
      case "health":
      newBots = newBots.sort(function(a, b) {
        return b.health - a.health
      })
        break;
      case "damage":
      newBots = newBots.sort(function(a, b) {
        return b.damage - a.damage
      })
        break;
      case "armor":
      newBots = newBots.sort(function(a, b) {
        return b.armor - a.armor
      })
        break;
    }

    this.setState({
      bots: newBots
    })
  }

  handleClassChange = (e) => {
    this.setState({
      class: e.target.value
    })
  }

  handleSortChange = (e) => {
    this.setState({
      sort: e.target.value
    })
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
    if (this.state.army.find(bot => bot.id == id)) {
      alert("You already have this bot in your army")
      this.allView()
    } else {
      let myBot = this.state.bots.find(bot => bot.id == id)
      this.setState({
        army: [myBot, ...this.state.army],
        view: "all"
      })
    }
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
        <BotFilter handleClassChange={this.handleClassChange} handleSortChange={this.handleSortChange} sort={this.sort} />
        {this.state.view === "all" ? <BotCollection specView={this.specView} bots={this.state.bots} /> : <BotSpecs allView={this.allView} addToArmy={this.addToArmy} data={this.state.view} />}
      </div>
    )
  }
}

export default BotsPage;
