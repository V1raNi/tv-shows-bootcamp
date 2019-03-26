import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = (props) => {
  if (!props.navBarVisible) {
    return null;
  }

  return (
    <nav aria-label="Navigation" className="navbar">
      <div className="navbar-homepage">
        <Link to="/">
          Homepage
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink activeClassName="nav-active" to="/popular">Popular</NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav-active" to="/trending">Trending</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;