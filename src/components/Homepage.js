import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = (props) => {
  props.switchVisibility(false);
  return (
    <div>
      <h1>Welcome to my app!</h1>
      <h4>Please choose what you want to see:</h4>
      <Link to="/popular" className="btn">
        Popular
      </Link>
      <Link to="/trending" className="btn">
        Trending
      </Link>
    </div>
  )
}

export default Homepage;