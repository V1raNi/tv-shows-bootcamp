import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = (props) => {
  props.switchVisibility(false);
  return (
    <div className="home">
      <div className="container">
        <h1>Keep track of your favorite TV shows!</h1>
        <h3>Please choose category:</h3>
        <div className="homepage-buttons">
          <Link to="/popular" className="btn">
            Popular
          </Link>
          <Link to="/trending" className="btn">
            Trending
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage;