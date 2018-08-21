import React from "react";
import { formatPrice } from "../helpers";

const Fish = props => {
  const d = props.details;
  return (
    <div className="menu-fish">
      <img src={d.image} alt={d.name} />
      <h3 className="fish-name">
        {d.name}
        <span class="price">{formatPrice(d.price)}</span>
      </h3>
      <p>{d.desc}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Fish;
