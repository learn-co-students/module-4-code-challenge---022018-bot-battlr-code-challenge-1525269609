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
      botArmy: [],
      clickedBot: null
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

  handleSpecs = (targetId) => {
    if (this.state.clickedBot!==null) {
      let formerClicked = this.state.clickedBot
      formerClicked.clicked = false
    }
    let clickedBot = this.state.botCollection.find(bot=>{
      return bot.id===parseInt(targetId)
    })
    console.log(clickedBot.enlisted)
    clickedBot.clicked = true
    this.setState({
      clickedBot: clickedBot
    })
  }

  handleBack = () => {
    console.log("working")
    //didn't quite have time to write the func to set this back
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
    removed.enlisted = false
    let index = this.state.botArmy.indexOf(removed)
    this.setState({
      botArmy: [...this.state.botArmy.slice(0, index), ...this.state.botArmy.slice(index+1)]
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.botArmy} handleRemoval={this.handleRemoval} handleSpecs={this.handleSpecs}/>
        <BotCollection bots={this.state.botCollection} handleRecruitment={this.handleRecruitment} handleSpecs={this.handleSpecs} clickedBot={this.state.clickedBot} army={this.state.botArmy} handleBack={this.handleBack}/>
      </div>
    );
  }

}

export default BotsPage;
