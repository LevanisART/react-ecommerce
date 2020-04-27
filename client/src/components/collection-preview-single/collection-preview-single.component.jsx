import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview-single.styles.scss';

const CollectionPreviewSingle = ({ title, items, history, match, routeName }) => {
  return(
    <div className="collection-preview d-flex flex-column">
      <div className="title-container" onClick={() => history.push(`shop/${routeName}`)}>
        {title.toUpperCase()}
      </div>
      <div className="collection-preview-container d-flex flex-wrap row">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
};

export default withRouter(CollectionPreviewSingle);
