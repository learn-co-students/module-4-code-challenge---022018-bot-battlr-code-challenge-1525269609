import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  constructor(){
    super()
    this.state={bots: [], army: [], specsSelected: false}
  }

  componentDidMount() {
    const url = "https://bot-battler-api.herokuapp.com/api/v1/bots"
    fetch(url)
    .then(res=>res.json())
    .then(json=>this.storeJSON(json))
  }

  botInArmy=(bot)=>{
    return this.state.army.find((armybot)=>{return armybot.id === bot.id})
  }

  selectBot = (bot)=>{

    if(!this.botInArmy(bot)){
      this.setState({specsSelected: bot})

    }
    else{
      let bots = [...this.state.army]
      let index = null;
      for(let i=0;i<bots.length;i++){if(bot.id === bots[i].id){index=i}}
      bots.splice(index,1)
      this.setState({army: bots})
    }
  }

  refactorAddToArmy = ()=>{
      let bot = this.state.specsSelected
      if(!this.botInArmy(bot)){
        let bots = [...this.state.army]
        bots.push(bot)
        this.setState({army: bots, specsSelected: false})
    }
  }

  removeSpecs = ()=>{
    this.setState({specsSelected: false})
  }
  storeJSON(json){
    this.setState({bots: json})
  }

  render() {
    return (
      <div>
      <YourBotArmy army={this.state.army} selectBot={this.selectBot}/>
      {this.state.specsSelected ?  <BotSpecs bot={this.state.specsSelected} refactorAddToArmy={this.refactorAddToArmy} removeSpecs={this.removeSpecs}/> : <BotCollection bots={this.state.bots} selectBot={this.selectBot} />}
      </div>
    );
  }

}//class

export default BotsPage;
