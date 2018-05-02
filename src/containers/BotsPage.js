import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: [],
    shownBot: false
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

  showBot = (id) => {
    let bot = this.state.bots.filter(b=> b.id === id)[0]
    this.setState({
      shownBot: <BotSpecs
      key={bot.id}
      addToArmy={this.addToArmy}
      unshowBot={this.unshowBot}
      {...bot}
      />
    })
  }

  unshowBot = () => {
    this.setState({
      shownBot: false
    })
  }

  render() {
    let show = this.state.shownBot ? this.state.shownBot : <BotCollection showBot={this.showBot} addToArmy={this.addToArmy} bots={this.state.bots} army={this.state.army}/>
    return (
      <div>
        <YourBotArmy removeFromArmy={this.removeFromArmy} bots={this.state.bots} army={this.state.army} />
        {show}
      </div>
    );
  }

}

export default BotsPage;
