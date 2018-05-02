import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

export default class BotCollection extends React.Component {
  state = {
    bot: ''
  }

  add = (x) => {
    this.setState({ bot: x })
  }

  close = () => {
    this.setState({ bot: "" })
  }

  render() {
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.state.bot !== "" ?
            <BotSpecs show={this.state.bot} close={this.close} addArmy={this.props.adds}/>
            :this.props.bots.map(bot => {
              return <BotCard key={bot.id} props={bot} add={this.add}/>
            })
          }
    		</div>
  	  </div>
  	)
  }
}
