import React from "react";
import BotCard from "../components/BotCard";


// presentational
class BotCollection extends React.Component {
  renderBots = () => {
    return this.props.allBots.map((bot) => {
      return <BotCard bot={bot} clickHandler={this.props.clickHandler}/>
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
        Collection of all bots
    		<div className="row">
    		  {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
