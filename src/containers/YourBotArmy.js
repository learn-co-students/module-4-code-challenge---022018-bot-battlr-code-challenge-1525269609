import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){

    const army = this.props.army.map(bot => <BotCard handleClick={this.props.removeFromArmy} data={bot} key={bot.id} />)

    return (
      <div className="ui segment inverted purple bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            <p id="your-bot-army">Your Bot Army</p>
            { army }
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
