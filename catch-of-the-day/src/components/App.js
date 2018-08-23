import React from "react";

import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const storeId = this.props.match.params.storeId;
    const localStateJson = window.localStorage.getItem(storeId);
    const localStateObj = JSON.parse(localStateJson);

    const restoreLocalState = () => {
      const order = localStateObj && localStateObj.order;
      this.setState({ order });
    }

    this.firebaseRef = base.syncState(`${storeId}/fishes`, {
      context: this,
      state: 'fishes',
      then: restoreLocalState
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.firebaseRef);
  }

  componentDidUpdate() {
    const key = this.props.match.params.storeId;
    const value = JSON.stringify({ ...this.state });
    window.localStorage.setItem(key, value);
  }

  addFish = (fish) => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  };

  updateFish = (key, fish) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = fish;
    this.setState({ fishes });
  };

  removeFish = (key) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = null; // use null for firebase
    this.setState({ fishes });
  }

  addToOrder = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }

  removeFromOrder = (key) => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  }

  seedFishes = () => this.setState({ fishes: sampleFishes });

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Welcome to Fish" />
          <ul className="fish-list">
            {
              Object.keys(this.state.fishes).map(key =>
                <Fish
                  key={key}
                  id={key}
                  details={this.state.fishes[key]}
                  addToOrder={this.addToOrder} />)
            }
          </ul>
        </div>
        <Order 
          removeFromOrder={this.removeFromOrder}
          order={this.state.order} 
          fishes={this.state.fishes} />
        <Inventory
          fishes={this.state.fishes}
          removeFish={this.removeFish}
          addFish={this.addFish}
          updateFish={this.updateFish}
          seedFishes={this.seedFishes} />
      </div>
    );
  }
}

export default App;
