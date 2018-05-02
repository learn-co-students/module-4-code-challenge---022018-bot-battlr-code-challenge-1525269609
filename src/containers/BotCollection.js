import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){

    let bots = this.props.bots.map(bot=><BotCard
      key={bot.id}
      addToArmy={this.props.addToArmy}
      showBot={this.props.showBot}
      bot_class={bot["bot_class"]}
      {...bot}
      />)

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
