import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ navBarVisible }) => {
  if (!navBarVisible) {
    return null;
  }

  return (
    <nav aria-label="Navigation" className="navbar">
      <div className="navbar-homepage">
        <Link to="/">Homepage</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink activeClassName="nav-active" to="/popular">
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav-active" to="/trending">
            Trending
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  navBarVisible: PropTypes.bool.isRequired,
};

export default Navbar;
