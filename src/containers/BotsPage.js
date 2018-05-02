import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const URL = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super();

    this.state = {
      botCollection: [],
      botArmy: []
    }
  }

  componentDidMount() {
    fetch(URL, {
      headers: {'Content-Type':'application/json'},
      method: 'get'
    }).then(res=>res.json()).then(json=>{
      this.setState({
        botCollection: json
      })
    })
  }

  handleRecruitment = (targetId) => {
    let recruited = this.state.botCollection.find(bot=>{
      return bot.id===parseInt(targetId)
    })
    recruited.enlisted = true
    if (!this.state.botArmy.includes(recruited)) {
      this.setState({
        botArmy: [...this.state.botArmy, recruited]
      })
    }
  }

  handleRemoval = (targetId) => {
    let removed = this.state.botArmy.find(bot=>{
      return bot.id===parseInt(targetId)
    })
    let index = this.state.botArmy.indexOf(removed)
    this.setState({
      botArmy: [...this.state.botArmy.slice(0, index), ...this.state.botArmy.slice(index+1)]
    })
  }

  render() {
    console.log(this.state.botArmy)
    return (
      <div>
        <YourBotArmy army={this.state.botArmy} handleRemoval={this.handleRemoval}/>
        <BotCollection bots={this.state.botCollection} handleRecruitment={this.handleRecruitment}/>
      </div>
    );
  }

}

export default BotsPage;
