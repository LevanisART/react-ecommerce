import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl, company } = item;

  return (
    <div className="collection-item-container col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
      <div className='item-image image'>
        <img src={imageUrl} alt=""/>
      </div>
      <div className="collection-footer-container bg-white d-flex align-items-center flex-column pt-3">
        <span className="brand-container text-center mb-2">{company}</span>
        <span className="name-container text-center">{name}</span>
        <span className="price-container text-center mt-1">${price}</span>
        <CustomButton className="custom-button add-button align-items-center mt-3" onClick={() => addItem(item)}>
          <svg className="mt-n1 mr-2" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2692 3.94286C13.2549 3.80142 13.1878 3.67035 13.0812 3.57526C12.9745 3.48016 12.8359 3.42786 12.6924 3.42857H10.9616C10.9616 2.51926 10.5969 1.64718 9.94768 1.00421C9.29857 0.361223 8.41807 0 7.50002 0C6.58197 0 5.70151 0.361223 5.05235 1.00421C4.40318 1.64718 4.03848 2.51926 4.03848 3.42857H2.30771C2.16419 3.42786 2.02556 3.48016 1.91888 3.57526C1.81221 3.67035 1.74514 3.80142 1.7308 3.94286L0.576947 15.3714C0.56946 15.4511 0.578944 15.5314 0.604783 15.6072C0.630622 15.683 0.672242 15.7526 0.726947 15.8114C0.780886 15.8706 0.846736 15.918 0.920259 15.9505C0.993791 15.983 1.07336 15.9998 1.15387 16H13.8462C13.9267 15.9998 14.0063 15.983 14.0798 15.9505C14.1533 15.918 14.2191 15.8706 14.2731 15.8114C14.3278 15.7526 14.3694 15.683 14.3953 15.6072C14.4211 15.5314 14.4306 15.4511 14.4231 15.3714L13.2692 3.94286ZM7.50002 1.14286C8.11207 1.14286 8.69905 1.38367 9.13184 1.81233C9.56455 2.24098 9.8077 2.82236 9.8077 3.42857H5.19233C5.19233 2.82236 5.43546 2.24098 5.86824 1.81233C6.30101 1.38367 6.88799 1.14286 7.50002 1.14286ZM2.83271 4.57143H4.03848V5.71429C4.03848 5.86584 4.09926 6.01118 4.20746 6.11834C4.31566 6.22551 4.4624 6.28571 4.61541 6.28571C4.76841 6.28571 4.91516 6.22551 5.02335 6.11834C5.13155 6.01118 5.19233 5.86584 5.19233 5.71429V4.57143H9.8077V5.71429C9.8077 5.86584 9.86849 6.01118 9.97673 6.11834C10.0849 6.22551 10.2317 6.28571 10.3847 6.28571C10.5377 6.28571 10.6844 6.22551 10.7926 6.11834C10.9008 6.01118 10.9616 5.86584 10.9616 5.71429V4.57143H12.1674L12.975 12.5714H2.01348L2.83271 4.57143ZM1.79425 14.8571L1.90964 13.7143H13.0904L13.2058 14.8571H1.79425Z" fill="white"/>
          </svg>
          <span>ADD TO CART</span>
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
