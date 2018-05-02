import React from "react";
import BotCard from "../components/BotCard";

export default class YourBotArmy extends React.Component {
  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.army.map(bot => {
              return <BotCard key={bot.id} props={bot} add={this.props.remove} />})
            }
          </div>
        </div>
      </div>
    )
  }
}
