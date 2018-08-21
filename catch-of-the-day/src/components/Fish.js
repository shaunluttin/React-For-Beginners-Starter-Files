import React from "react";
import { formatPrice } from "../helpers";

const Fish = props => {
  const { name, price, desc, image, status } = props.details;
  const id = props.id;
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
        onClick={() => props.addToOrder(id)}>{isAvailable ? 'Add to Cart' : 'Sold Out'}</button>
    </div>
  );
};

export default Fish;
