import React from 'react';
import AddFishForm from './AddFishForm';
import UpdateFishForm from './UpdateFishForm';

class Inventory extends React.Component {
    render() {
        const fishKeys = Object.keys(this.props.fishes);
        return (
            <div>
                {fishKeys.map(key => <UpdateFishForm 
                    key={key} 
                    id={key}
                    removeFish={this.props.removeFish}
                    updateFish={this.props.updateFish}
                    fish={this.props.fishes[key]} />)}
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.seedFishes}>Seed Fishes</button>
            </div>
        );
    }
}

export default Inventory;