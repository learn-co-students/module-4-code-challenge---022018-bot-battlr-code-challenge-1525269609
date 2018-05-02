import React from "react";
import BotSpecs from "../components/BotSpecs.js"
import BotCollection from "./BotCollection.js"
import YourBotArmy from "./YourBotArmy.js"

class BotsPage extends React.Component {
  constructor(){
    super()
    this.state = {
      allBots:[],
      army:[],
      enlistingBot: false
    }
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(json => {
      console.log(json)
      this.setState({
        allBots: json
      })
    })
  }

  reshowAllBots = () => {
    this.setState({
      enlistingBot: false
    })
  }

  showBotSpecs = (bot) => {
    return <
    BotSpecs bot = {bot} backHandler={this.reshowAllBots} enlistHandler={this.clickHandler}
    />
  }

  enlistingBotHandler = (bot) => {
    this.setState({
      enlistingBot: bot
    })
  }

  clickHandler = (bot) => {
    if(this.state.army.indexOf(bot) > -1){
      return console.log ("You have already added this bot to your army")
    }
    let bigArmy = [...this.state.army]
    bigArmy.push(bot)
    this.setState({
      army: bigArmy
    })
  }

  removeHandler = (bot) => {
    let smallArmy = [...this.state.army]
    smallArmy.splice(smallArmy.indexOf(bot), 1)
    this.setState({
      army: smallArmy
    })
  }

  render() {
    return (
      <div>
      <YourBotArmy army={this.state.army} clickHandler={this.removeHandler}/>
      {!this.state.enlistingBot ? <
        BotCollection allBots={this.state.allBots} clickHandler={this.enlistingBotHandler}
        /> : this.showBotSpecs(this.state.enlistingBot)}
      </div>
    );
  }

}

export default BotsPage;
