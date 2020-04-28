import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
  <div className="container my-5">
    <div className="row d-flex justify-content-between">
      <SignIn />
      <SignUp />
    </div>
  </div>
);

export default SignInAndSignUpPage;
