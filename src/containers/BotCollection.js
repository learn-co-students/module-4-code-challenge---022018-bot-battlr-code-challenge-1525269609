import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {
  renderedBots = () => this.props.bots.map(bot=>{
    return (
      <div>
        {bot!==this.props.clickedBot ?
        <BotCard bot={bot} handleSpecs={this.props.handleSpecs} army={this.props.army}/> :
        <BotSpecs bot={this.props.clickedBot} handleRecruitment={this.props.handleRecruitment} handleSpecs={this.props.handleSpecs} handleBack={this.props.handleBack}/> }
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
