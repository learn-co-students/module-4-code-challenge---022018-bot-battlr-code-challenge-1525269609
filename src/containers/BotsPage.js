import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: []
  }

  componentDidMount(){
     fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
     .then(resp=>resp.json())
     .then(json=>{
       this.setState({
         bots: json
       })
     }
    )
  }

  addToArmy = (id) => {
    let bot = this.state.bots.filter(bot=> bot.id === id)[0]
    if (!this.state.army.includes(bot)){
      this.setState({
        army: [...this.state.army, bot]
      })
    }
  }

  removeFromArmy = (id) => {
    let newArmy = this.state.army.filter(bot=> bot.id !== id)
    this.setState({
      army: [...newArmy]
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy removeFromArmy={this.removeFromArmy} bots={this.state.bots} army={this.state.army} />
        <BotCollection addToArmy={this.addToArmy} bots={this.state.bots} army={this.state.army}/>
      </div>
    );
  }

}

export default BotsPage;
