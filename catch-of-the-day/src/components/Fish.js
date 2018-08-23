import React from "react";
import PropTypes from 'prop-types';
import { formatPrice } from "../helpers";

class Fish extends React.Component {

  static propTypes = {
    id: PropTypes.string,
    details: PropTypes.shape({
      name: PropTypes.string, 
      price: PropTypes.number, 
      desc: PropTypes.string, 
      image: PropTypes.string, 
      statu: PropTypes.strings
    }),
    addToOrder: PropTypes.func,
  };

  render() {
    const { name, price, desc, image, status } = this.props.details;
    const id = this.props.id;
    const isAvailable = status === 'available';
    return (
      <div className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(id)}>{isAvailable ? 'Add to Cart' : 'Sold Out'}</button>
      </div>
    );
  }
}

export default Fish;
