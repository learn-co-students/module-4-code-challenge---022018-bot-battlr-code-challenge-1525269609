import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  renderedBots = () => this.props.bots.map(bot=>{
    return (
      <div>
        <BotCard bot={bot} handleRecruitment={this.props.handleRecruitment}/>
      </div>
    )
  })

  render(){
    // console.log("bots", this.props.bots)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderedBots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
