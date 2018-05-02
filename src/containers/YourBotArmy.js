import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  renderArmy = () => {
    return this.props.army.map((bot) => {
      return <BotCard bot={bot} clickHandler={this.props.clickHandler}/>
    })
  }

  render(){
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
