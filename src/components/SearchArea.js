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
      <SearchBox sendQuery={props.sendQuery} genres={props.genres}/>
      <Dropdown sendQuery={props.sendQuery} limit={props.limit} />
    </div>
  )
};

export default SearchArea;