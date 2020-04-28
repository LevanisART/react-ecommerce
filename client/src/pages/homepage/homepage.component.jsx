import React from 'react';

import Directory from '../../components/directory/directory.component';


class HomePage extends React.Component {
  componentDidMount() {
    const header = document.querySelector('.header');
    header.style.borderBottom = 'none';
  }

  componentWillUnmount() {
    const header = document.querySelector('.header');
    header.style.borderBottom = '1px solid #f4f4f4';
  }
  
  render() {
    return (
      <div className="d-flex flex-direction-column align-items-center mt-sm-5">
        <Directory />
      </div>
    )
  }
};

export default HomePage;