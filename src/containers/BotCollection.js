import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){

    let bots = this.props.bots.map(bot=><BotCard
      key={bot.id}
      addToArmy={this.props.addToArmy}
      bot_class={bot["bot_class"]}
      id={bot.id}
      avatar_url={bot.avatar_url}
      name={bot.name}
      catchphrase={bot.catchphrase}
      health={bot.health}
      damage={bot.damage}
      armor={bot.armor}
      />)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {bots}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
