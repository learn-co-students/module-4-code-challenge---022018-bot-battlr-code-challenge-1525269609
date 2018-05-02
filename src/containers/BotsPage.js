import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


const url = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {

  state ={
    bots: [],
    clicked: false
  }


  componentDidMount(){
    fetch(url)
    .then(r => r.json())
    .then(json => this.setState({bots: json}))
  }

  handleChange(e){
    console.log(e.target)
    this.setState({
      clicked: true
    })
  }


  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.clicked}/>
        <BotCollection handleChange={this.handleChange.bind(this)} bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
