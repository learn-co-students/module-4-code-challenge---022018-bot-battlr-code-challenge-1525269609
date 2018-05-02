import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BotsPage />
      </div>
    );
  }
}

export default App;
// BotCard and BotSpecs are presentational component
// BotCollection is where all the bots will be displayed,
// YourBotArmy (the green portion on the top of the screen) will only display
//   the bots that have been selected by the user.
// BotPage is the highest component below App, and serves as the main container for all of the pieces of the page.
