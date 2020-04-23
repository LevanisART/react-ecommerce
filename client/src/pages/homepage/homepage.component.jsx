import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => {
  return (
    <HomePageContainer className="container mt-5">
      <Directory />
    </HomePageContainer>
  )
};

export default HomePage;