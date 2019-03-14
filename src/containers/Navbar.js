import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  if (!props.navBarVisible) {
    return null;
  }

  return (
    <nav>
      <div>
        <div>
          <Link to="/">
            Homepage
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/popular">Popular</Link>
          </li>
          <li>
            <Link to="/trending">Trending</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;