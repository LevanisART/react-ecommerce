import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page content container pb-5 px-4 overflow-hidden">
    <div className="checkout-page-container">
      <div className="checkout">
        <div className="checkout-header-container">
          <div className="header-block-container">
            <span>Product</span>
          </div>
          <div className="header-block-container">
            <span>Description</span>
          </div>
          <div className="header-block-container">
            <span>Quantity</span>
          </div>
          <div className="header-block-container">
            <span>Price</span>
          </div>
          <div className="header-block-container">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
    </div>
    <div className="checkout-total w-100 d-flex flex-column align-items-end">
      <div className="total">TOTAL: ${total}</div>
        {/* <div className="warning">
          *Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </div> */}
      <StripeCheckoutButton price={total} />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
