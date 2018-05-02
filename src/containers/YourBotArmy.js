import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    let bots = this.props.army.map((bot,index)=><BotCard key={index} index={index} bot={bot} selectBot={this.props.selectBot}/>)


    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {bots}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
