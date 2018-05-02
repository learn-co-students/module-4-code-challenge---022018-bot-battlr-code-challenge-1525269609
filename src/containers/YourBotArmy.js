import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  renderBots=()=>{
    if (this.props.selectedBots.length > 0){
    return this.props.selectedBots.map((bot)=>{
      return(
        <BotCard handleClick={this.props.handleEnlistClick} key={bot.id} bot={bot} />
      )
    })}
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
