import React from 'react';
import AddFish from './AddFish';

class Inventory extends React.Component {
    render() {
        return (
            <div>
                <AddFish addFish={this.props.addFish} />
            </div>
        );
    }
}

export default Inventory;