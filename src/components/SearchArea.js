import React from 'react';

import Dropdown from './Dropdown';
import SearchBox from './SearchBox';

const SearchArea = (props) => {
  
  // unnecessary function? should I use React.Context here? 
  // handleQuery = queryText => {
  //   this.props.sendQuery(queryText);
  // }
  
  return (
    <div className="search-area">
      <Dropdown sendQuery={props.sendQuery} />
      <SearchBox sendQuery={props.sendQuery} genres={props.genres}/>
    </div>
  )
};

export default SearchArea;