import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreviewSingle from '../collection-preview-single/collection-preview-single.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import ManImage1 from '../../assets/images/man1.png';
import ManImage2 from '../../assets/images/man2.png';
import WomanImage1 from '../../assets/images/woman1.png';
import WomanImage2 from '../../assets/images/woman2.png';

import HeroSection from '../hero-section/hero-section.component';

import './directory.styles.scss';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';


class Directory extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }
  
  render() {
    const { collections } = this.props;
    
    const mensCollection = collections.filter((item) => item.title === "Mens");
    const womensCollection = collections.filter((item) => item.title === "Womens");
    
    return(
      <div className="w-100">
        <HeroSection 
          image1={ManImage1}
          image2={ManImage2}
          titleSm="MEN’S NEW ARRIVALS"
          titleLg={"THE LATEST \n AND GREATEST"}
          shopLink="/shop/mens"
        />

        <div className="container py-5">
          <div className="collection-overview container d-flex flex-column my-5">
            {mensCollection.map(({ id, ...otherCollectionProps }) => (
              <CollectionPreviewSingle key={id} {...otherCollectionProps} />
            ))}
          </div>
        </div>
        
        <HeroSection 
          image1={WomanImage1}
          image2={WomanImage2}
          titleSm="WOMEN’S NEW ARRIVALS"
          titleLg={"THE LATEST \n AND GREATEST"}
          shopLink="/shop/womens"
        />

        <div className="container pt-5">
          <div className="collection-overview container d-flex flex-column mt-5">
            {womensCollection.map(({ id, ...otherCollectionProps }) => (
              <CollectionPreviewSingle key={id} {...otherCollectionProps} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
