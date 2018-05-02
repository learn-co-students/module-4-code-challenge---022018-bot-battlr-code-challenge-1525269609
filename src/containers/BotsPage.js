import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"
import Sorter from "../components/Sorter"

class BotsPage extends React.Component {
  state = {
    bots: [],
    army: [],
    shownBot: false,
    sortBy: "id"
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

  changeSort = (e) => {
    let sortedBots = this.state.bots.sort((a,b) => {return b[e.target.value] - a[e.target.value]})
    this.setState({
      bots: sortedBots,
      sortBy: e.target.value
    })
  }

  render() {
    let show = this.state.shownBot ? this.state.shownBot : <BotCollection showBot={this.showBot} addToArmy={this.addToArmy} bots={this.state.bots} army={this.state.army}/>
    return (
      <div>
        <YourBotArmy removeFromArmy={this.removeFromArmy} bots={this.state.bots} army={this.state.army} />
        <Sorter changeSort={this.changeSort} sortBy={this.state.sortBy}/><br/>
        {show}
      </div>
    );
  }

}

export default BotsPage;
