import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  };

  seedFishes = () => this.setState({ fishes: sampleFishes });

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="This is Awesome" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} seedFishes={this.seedFishes} />
      </div>
    );
  }
}

export default App;
