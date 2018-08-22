import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {

    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish.status === 'available';
        if(!isAvailable) {
            const name = fish ? fish.name : 'This fish';
            return <li key={key}>{name} is no longer available.</li>
        }

        return (
            <li key={key}>
                <span>{count}</span>
                <span> - {fish.name}</span>
                <span> - {formatPrice(fish.price)}</span>
            </li>);
    }

    renderTotal = () => {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((grandTotal, id) => {
            const count = this.props.order[id];
            const fish = this.props.fishes[id];
            const fishTotal = count * fish.price;
            return grandTotal + fishTotal;
        }, 0)

        return (<p>Total: {formatPrice(total)}</p>);
    }

    render() {
        const orderIds = Object.keys(this.props.order);
        return (
            <div>
                <h1>Order</h1>
                <ul>
                    {orderIds.map(this.renderOrder)}
                </ul>
                {this.renderTotal()}
            </div>
        );
    }
}

export default Order;