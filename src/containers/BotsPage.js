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

  selectBot = (bot)=>{
    console.log("BotsPage: botcard returned object: ");
    console.log(bot);
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
