import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy"
import BotSpecs from '../components/BotSpecs'


class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots:[],
    selectedBots:[],
    chosenBot: null,
  }

  handleEnlistClick=(e)=>{
    const botArmy = this.state.selectedBots
    const foundBot = this.state.bots.find((bot) => bot.id==e.target.id)
    const foundSelectedBot = botArmy.find((bot) => bot===foundBot)
    if (foundSelectedBot) {
      this.setState({
        selectedBots: [...botArmy.slice(0, botArmy.indexOf(foundSelectedBot)), ...botArmy.slice(botArmy.indexOf(foundSelectedBot)+1, botArmy.length)]
      })
    }else{
      this.setState({
        selectedBots: [...botArmy, foundBot],
        chosenBot: null
      })
    }
  }

  handleSpecsClick=(e)=>{
    let foundBot = this.state.bots.find((bot) => bot.id==e.target.id)
    this.setState({
      chosenBot: foundBot
    })
  }

  handleGoBackClick=(e)=>{
    this.setState({
      chosenBot: null
    })
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(r=> r.json())
      .then(botList =>{
        this.setState({
          bots: botList
        })
      } )
  }

  render() {
    return (
      <div>
        <YourBotArmy selectedBots={this.state.selectedBots}  handleEnlistClick={this.handleEnlistClick}/>
        {this.state.chosenBot ? <BotSpecs selectedBots={this.state.selectedBots} bot={this.state.chosenBot} handleEnlistClick={this.handleEnlistClick} handleGoBackClick={this.handleGoBackClick}/> : <BotCollection bots={this.state.bots} handleSpecsClick={this.handleSpecsClick} selectedBots={this.state.selectedBots}/>}
      </div>
    );
  }

}

export default BotsPage;
