import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render(){
    let bots = this.props.bots.map(bot => <BotCard bot={bot} key={bot.id} toggle={this.props.toggle}/>)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {bots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
