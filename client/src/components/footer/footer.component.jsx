import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './footer.styles.scss';

const Footer = () => (
  <footer className="footer py-5 mt-5">
    <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-between flex-wrap">
      <Link className="mb-4 mb-sm-0" to="/">
        <Logo />
      </Link>
      <span className="copyright mb-2 mb-sm-0 text-center text-sm-right">Copyright © 2020 Clothio, All Rights Reserved</span>
    </div>
  </footer>
);

export default Footer;
