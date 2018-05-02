import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {


  render(){

    // const botArmy = this.props.bots.map(bot =>
      // if(bot.clicked === true)
      // return (
      //   <BotCard bot={bot} />)

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            // {}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
