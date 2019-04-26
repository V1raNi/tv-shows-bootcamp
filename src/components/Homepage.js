import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// const Homepage = ({ switchVisibility }) => {
// figure out why switchVisibility causes endless render here if Main isn't wrapped with connect
// has to do something with shouldComponentUpdate implemented by Redux, probably

class Homepage extends Component {
  componentDidMount() {
    this.props.switchVisibility(false);
  }

  render() {
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
    );
  }
}

Homepage.propTypes = {
  switchVisibility: PropTypes.func.isRequired,
};

export default Homepage;
