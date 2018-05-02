import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  render(){
    let bots = this.props.army.map(bot=><BotCard
      key={bot.id}
      addToArmy={this.props.removeFromArmy}
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
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {bots}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
