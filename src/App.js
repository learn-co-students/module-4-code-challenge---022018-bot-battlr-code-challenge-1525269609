import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";
// import Search from "./components/Search.js";

class App extends Component {
  //
  // searchRobots(query){
  //   let bots = this.state.allBots.filter((bot) => {
  //     return bot.title.includes(query) || bot.body.includes(query)
  //   });
  //   this.setState({bots: bots})
  // }

  render() {
    return (
      <div className="App">
        <BotsPage />
      </div>
    );
  }
}

export default App;
