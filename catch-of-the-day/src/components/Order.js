import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends React.Component {

    static propTypes = {
        // is object as precise as we can get for fishes and order types?
        fishes: PropTypes.object,
        order: PropTypes.object,
        removeFromOrder: PropTypes.func,
    };

    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish.status === 'available';
        const transitionOptions = {
            key, // When this changes, then trigger the animation.
            classNames: 'order',
            timeout: { enter: 5000, exit: 5000 },
        };

        if (!isAvailable) {
            const name = fish ? fish.name : 'This fish';
            return (
                <CSSTransition {...transitionOptions}>
                    <li key={key}>{name} is no longer available.</li>
                </CSSTransition>
            )
        }

        return (
            <CSSTransition {...transitionOptions}>
                <li key={key}>
                    <TransitionGroup component="span" className="count">
                        <CSSTransition
                            key={count}
                            classNames="count"
                            timeout={{ enter: 5000, exit: 5000 }}>
                            <span>{count}</span>
                        </CSSTransition>
                    </TransitionGroup>
                    <span> - {fish.name}</span>
                    <span> - {formatPrice(fish.price)}</span>
                    <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
                </li>
            </CSSTransition>
        );
    }

    renderTotal = () => {
        if (!this.props.order) return;

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

        if(!this.props.order) return;

        const orderIds = Object.keys(this.props.order);
        return (
            <div>
                <h1>Order</h1>
                <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderOrder)}
                </TransitionGroup>
                {this.renderTotal()}
            </div>
        );
    }
}

export default Order;