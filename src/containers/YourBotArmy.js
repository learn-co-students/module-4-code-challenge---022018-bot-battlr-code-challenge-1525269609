import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  render(){
    const bots = this.props.bots.map(bot => <BotCard bot={bot} key={bot.id} selectBot={this.props.selectBot} />)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {bots}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
