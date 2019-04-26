import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';
import SearchBox from './SearchBox';

const SearchArea = ({ sendQuery, genres, limit }) => {
  // unnecessary function? should I use React.Context here?
  // handleQuery = queryText => {
  //   this.props.sendQuery(queryText);
  // }
  return (
    <div className="search-area">
      <SearchBox sendQuery={sendQuery} genres={genres} />
      <Dropdown sendQuery={sendQuery} limit={limit} />
    </div>
  );
};

SearchArea.propTypes = {
  sendQuery: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  limit: PropTypes.string.isRequired,
};

export default SearchArea;
