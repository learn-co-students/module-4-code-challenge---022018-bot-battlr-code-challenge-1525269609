import React from "react";
import BotCard from "../components/BotCard";
// import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here

  // state = {
  //   clicked: false
  // }

  // toggleClick = () => {
  //   console.log('in toggleClick');
  //   const state = this.state.clicked
  //   this.setState({
  //     clicked: !state
  //   })
  // }

  render(){

    const bots = this.props.bots.map((bot, index) => {
      return <BotCard bot={bot} index={index} key={index} addBot={this.props.addBot} />
    })

    // const botSpecs = this.props.bots.map((bot, index) => {
    //   return <BotCard bot={bot} index={index} key={index} toggleClick={this.props.toggleClick} />
    // })

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          { bots }
    		  Collection of all bots
          {/* {this.state.clicked ? botSpecs : bots} */}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
