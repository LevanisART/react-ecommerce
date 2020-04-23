import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import ManImage1 from '../../assets/images/man1.png';
import ManImage2 from '../../assets/images/man2.png';
import WomanImage1 from '../../assets/images/woman1.png';
import WomanImage2 from '../../assets/images/woman2.png';

import MenuItem from '../menu-item/menu-item.component';
import HeroSection from '../hero-section/hero-section.component';

import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className="w-100">
    <HeroSection 
      image1={ManImage1}
      image2={ManImage2}
      titleSm="MEN’S NEW ARRIVALS"
      titleLg="THE LATEST AND GREATEST"
      shopLink="/shop/mens"
    />

    <div className="container py-5">
      <div className="directory">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    </div>
    
    <HeroSection 
      image1={WomanImage1}
      image2={WomanImage2}
      titleSm="WOMEN’S NEW ARRIVALS"
      titleLg="THE LATEST AND GREATEST"
      shopLink="/shop/womens"
    />
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
