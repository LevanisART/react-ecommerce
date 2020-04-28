import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item-container">
    <img className="cart-item-image" src={imageUrl} alt='item' />
    <div className="item-details-container">
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default React.memo(CartItem);
