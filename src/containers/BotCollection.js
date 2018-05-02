import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){

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
