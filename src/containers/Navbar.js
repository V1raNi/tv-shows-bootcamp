import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
    return(
      <div>
        {this.props.navBarVisible && (
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
        )}
      </div>
    )
  }
}

export default Navbar;