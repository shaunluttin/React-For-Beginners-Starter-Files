import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
    render() {
        return (
            <div>
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.seedFishes}>Seed Fishes</button>
            </div>
        );
    }
}

export default Inventory;