import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item-container col-3 mb-5">
      <div style={{backgroundImage: `url(${imageUrl})`}} className='background-image image' />
      <div className="collection-footer-container d-flex align-items-center flex-column mt-3">
        <span className="brand-container text-center mb-2">NIKE</span>
        <span className="name-container text-center">{name}</span>
        <span className="price-container text-center mt-1">${price}</span>
        <CustomButton className="add-button" onClick={() => addItem(item)}>
          Add to cart
        </CustomButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
