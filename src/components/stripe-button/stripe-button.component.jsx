import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_9ba4KEBHFwxF9nF1bBruM37L00paONb9ee';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesfull');
  }


  return (
    <StripeCheckout 
      label='Pay Now'
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;