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
        Your Bot Army
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
