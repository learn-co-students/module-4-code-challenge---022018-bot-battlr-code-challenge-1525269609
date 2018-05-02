import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"


let url = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    selectedBots: [],
    isSelected: false
  }

  componentDidMount(){
    fetch(url)
    .then(r => r.json()) //array of bot objects
    .then(json => this.setState({
      bots: json
    }))
  }

  handleClick = () => {
    console.log("hello")
    // this.setState({
    //   isSelected: !isSelected
    // })

    let newBots = this.state.bots

    newBots = newBots.filter(bot => bot.selected === true )

     this.setState({
       selectedBots: newBots
     })

  }


  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.selectedBots} handleClick={this.handleClick}/>
        <BotCollection bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
