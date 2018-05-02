import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  render(){
    // console.log(this.props.bots[0]);
    let allbots = this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} speccedBot = {this.props.speccedBot}/>)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {allbots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
