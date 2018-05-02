import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state={bots: [], army: []}
  }

  componentDidMount() {
    const url = "https://bot-battler-api.herokuapp.com/api/v1/bots"
    fetch(url)
    .then(res=>res.json())
    // .then(json=>console.log(json))
    .then(json=>this.storeJSON(json))

    //get back array with objects
    // values: see below
  }

  botInArmy=(bot)=>{
    return this.state.army.find((armybot)=>{return armybot.id === bot.id})
  }

  selectBot = (bot)=>{
    console.log("BotsPage: botcard returned object: ");
    console.log(bot);
    console.log(this.botInArmy(bot));
    if(!this.botInArmy(bot)){
      let bots = [...this.state.army]
      bots.push(bot)
      this.setState({army: bots},()=>{console.log("logging army:");console.log(this.state.army);})
    }
    else{
      //remove bot from army
      let bots = [...this.state.army]
      let index = null;
      for(let i=0;i<bots.length;i++){if(bot.id === bots[i].id){index=i}}
      console.log("*********INDEX is:" +index);
      bots.splice(index,1)
      this.setState({army: bots},()=>{console.log("logging army:");console.log(this.state.army);})
    }
  }

  storeJSON(json){
    this.setState({bots: json})
  }

  render() {
    // console.log(this.state.bots);
    return (
      <div>
      <YourBotArmy/>
      <BotCollection bots={this.state.bots} selectBot={this.selectBot} />
      </div>
    );
  }

}//class

export default BotsPage;
// Work on fetching data from this API: https://bot-battler-api.herokuapp.com/api/v1/bots.

// json values per object
// 74
// avatar_url
// :
// "https://robohash.org/iustodoloremrerum.png?size=300x300&set=set1"
// bot_class
// :
// "Support"
// catchphrase
// :
// "111011001111110111100111101111000"
// created_at
// :
// "2018-02-01T18:41:32.174Z"
// damage
// :
// 25
// health
// :
// 92
// id
// :
// 1
// name
// :
// "bvt-99"
// updated_at
// :
// "2018-02-01T18:41:32.174Z"
