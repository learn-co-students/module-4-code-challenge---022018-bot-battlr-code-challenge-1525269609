import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    // console.log("BotCollection");
    // console.log(this.props.bots);
    console.log(this.props);
    let bots = this.props.bots.map((bot,index)=><BotCard key={index} index={index} bot={bot} selectBot={this.props.selectBot}/>)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
            {bots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
// After you have fetched the bots, work on rendering them into
// BotCollection, which should be a child of BotsPage.
//  A component called BotCard has been provided to you to display
//   the information about an individual bot in a list format.
