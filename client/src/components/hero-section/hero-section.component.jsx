import React from 'react';
import { Link } from 'react-router-dom';

import './hero-section.styles.scss';

const HeroSection = (props) => (
  <div className="hero-section mt-4">
    <div className="container d-flex align-items-center justify-content-between">
      <div className="img-left col-3 mt-n5 ml-n5 d-flex justify-content-end">
        <img className="ml-n5 mt-n3" src={props.image1} alt=""/>
      </div>
      <div className="d-flex align-items-center flex-column">
        <span className="title-sm text-center">{props.titleSm}</span>
        <span className="title-lg text-center mt-2">{props.titleLg}</span>
        <Link to={props.shopLink} className="shop-button mt-3">SHOP NOW</Link>
      </div>
      <div className="img-right col-3 mt-n5 ml-n5">
        <img className="mr-n5 mt-n3 pl-4 ml-2" src={props.image2} alt=""/>
      </div>
    </div>
  </div>
);

export default HeroSection;