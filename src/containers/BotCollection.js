import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {


  render(){

    const bot = this.props.bots.map(bot => <BotCard bot={bot} handleChange={this.props.handleChange}/>)

    console.log(this.props.bots)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {bot}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
