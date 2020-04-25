import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return(
    <div className="collection-preview d-flex flex-column">
      <div className="title-container" onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title.toUpperCase()}
      </div>
      <div className="collection-preview-container">
        {items
          .filter((item, idx) => idx < 6)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
};

export default withRouter(CollectionPreview);
