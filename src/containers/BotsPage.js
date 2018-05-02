import React from "react";
import BotCollection from './BotCollection'
class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state = {
      bots: []
    }
  }
  botFetch = () => {
    let url = "https://bot-battler-api.herokuapp.com/api/v1/bots"
    fetch(url)
      .then(resp=>resp.json())
      .then(bots => {
        this.setState({bots})
      })
  }

  render() {
    return (
      <div>

        <BotCollection bots={this.state.bots}/>
        <button onClick={this.botFetch}/>
      </div>
    );
  }

}

export default BotsPage;
