import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  constructor(){
    super()
    this.state = {
      bots:[]
    }
  }

  render(){
    const botCollector = () => {
      this.state.bots.map(bot=>{
        <BotCard {...bot}/>
      })
    }
    console.log(botCollector)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {botCollector}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
