import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/popular">Popular</Link>
        </li>
        <li>
          <Link to="/trending">Trending</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;