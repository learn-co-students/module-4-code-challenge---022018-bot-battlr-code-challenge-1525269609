import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){

    const bots = this.props.bots.map(bot => <BotCard handleClick={this.props.specView} data={bot} key={bot.id} />)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  { bots }
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
