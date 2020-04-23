import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { Navbar, Nav } from 'react-bootstrap'
import './header.styles.scss';

import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <div className="container d-flex align-items-center justify-content-between position-relative py-4">
    <div className="d-flex align-items-center">
      <Link to='/'>
        <Logo className="logo mt-n1" />
      </Link>

      <Navbar collapseOnSelect expand="lg" className="p-0">
        <div className="header-burger d-flex align-items-center">
          <Navbar.Toggle 
            aria-controls="responsive-navbar-nav" 
            className="header-burger-btn burger"
          >
            <div className="burger-box">
              <div className="burger-inner"></div>
            </div>
          </Navbar.Toggle>
        </div>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <div className="nav-item">
              <Link className="nav-link" to="/">Home Page</Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/shop">Collections</Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/">About Us</Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/shop">Contact</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>

    <div className="account-cart d-flex align-items-center mr-2">
      <div className="account mr-2">
        {currentUser ? (
          <div className="nav-link btn border-0" onClick={signOutStart}>
            Sign Out
          </div>
        ) : (
          <Link className="nav-link" to='/signin'>Sign In</Link>
        )}
      </div>
      <CartIcon />
    </div>
      
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
