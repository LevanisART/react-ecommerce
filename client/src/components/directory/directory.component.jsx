import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import ManImage1 from '../../assets/images/man1.png';
import ManImage2 from '../../assets/images/man2.png';
import WomanImage1 from '../../assets/images/woman1.png';
import WomanImage2 from '../../assets/images/woman2.png';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className="w-100">
    <div className="hero-section mt-4">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="col-3 mt-n5 ml-n5 d-flex justify-content-end">
          <img className="ml-n5 mt-n3" src={ManImage1} alt=""/>
        </div>
        <div className="d-flex align-items-center flex-column">
          <span className="title-sm text-center">MEN’S NEW ARRIVALS</span>
          <span className="title-lg text-center mt-2">THE LATEST <br />AND GREATEST</span>
          <Link to="/shop/mens" className="shop-button mt-3">SHOP NOW</Link>
        </div>
        <div className="col-3 mt-n5 ml-n5">
          <img className="mr-n5 mt-n3 pl-2" src={ManImage2} alt=""/>
        </div>
      </div>
    </div>

    <div className="container py-5">
      <div className="directory">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    </div>

    <div className="hero-section mt-5">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="col-3 mt-n5 ml-n5 d-flex justify-content-end">
          <img className="ml-n5 mt-n3" src={WomanImage1} alt=""/>
        </div>
        <div className="d-flex align-items-center flex-column">
          <span className="title-sm text-center">WOMEN’S NEW ARRIVALS</span>
          <span className="title-lg text-center mt-2">THE LATEST <br />AND GREATEST</span>
          <Link to="/shop/womens" className="shop-button mt-3">SHOP NOW</Link>
        </div>
        <div className="col-3 mt-n5 ml-n5">
          <img className="mr-n5 mt-n3 pl-2" src={WomanImage2} alt=""/>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
