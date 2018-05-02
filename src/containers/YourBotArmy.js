import React from "react";
import DisplayBotCard from "../components/DisplayBotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    let allbots = this.props.bots.map(bot => <DisplayBotCard key={bot.id} bot={bot} displayed={this.props.displaybots.includes(bot)} removeRobot={this.props.removeRobot}/>)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {allbots}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
