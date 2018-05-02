import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  renderArmy = () => this.props.army.map(bot=>{
    return (
      <div>
        <BotCard bot={bot} handleRemoval={this.props.handleRemoval} handleSpecs={this.props.handleSpecs}/>
      </div>
    )
  })

  render(){
    // console.log("army", this.props.army)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderArmy()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
