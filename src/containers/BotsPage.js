import React from "react";
import YourBotArmy from "./YourBotArmy"
import BotCollection from "./BotCollection"
import BotSpecs from "../components/BotSpecs"

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    displaybots: [],
    speccedBot: null
  }

  componentDidMount() {
    fetch(API).then(resp => resp.json()).then(bots => {
      return (
        this.setState({
          bots: bots
        })
      )
    })
  }

  pickRobot = (bot) => {
    console.log("pickrobot");
    if (!this.state.displaybots.includes(bot)){
      let newbots = [...this.state.displaybots, bot]
      this.setState({
        displaybots: newbots
      })
    }
  }

  speccedBot = (bot) => {
    console.log("speccedbot");
    this.setState({
      speccedBot: bot
    })
  }

  clearspeccedBot = () => {
    this.setState({
      speccedBot: null
    })
  }

  removeRobot = (bot) => {
    let index = this.state.displaybots.indexOf(bot)
    this.setState({
      displaybots: [...this.state.displaybots.slice(0,index), ...this.state.displaybots.slice(index+1)]
    })
  }

  render() {
    return (
      <div>
        {this.state.displaybots !== [] ? <YourBotArmy bots={this.state.displaybots} displaybots={this.state.displaybots} removeRobot={this.removeRobot}/>
        : null }
        {this.state.speccedBot ? <BotSpecs bot = {this.state.speccedBot} clearspeccedBot = {this.clearspeccedBot} pickRobot = {this.pickRobot}/> :
        <BotCollection bots={this.state.bots} speccedBot = {this.speccedBot} displaybots={this.state.displaybots} removeRobot={this.removeRobot}/>}
      </div>
    );
  }

}

export default BotsPage;
