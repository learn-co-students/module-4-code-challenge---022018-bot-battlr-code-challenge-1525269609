import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here


  renderBots=()=>{
    return this.props.bots.map((bot)=>{
      return (
        <BotCard handleClick={this.props.handleSpecsClick} key={bot.id} bot={bot} />
      )
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
        <h1>Collection of all bots</h1>
    		<div className="row">
          {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
