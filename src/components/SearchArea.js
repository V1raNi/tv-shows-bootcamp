import React from 'react';

import Dropdown from './Dropdown';
import SearchBox from './SearchBox';
import Pagination from './Pagination';

const SearchArea = (props) => {
  
  // unnecessary function? should I use React.Context here? 
  // handleQuery = queryText => {
  //   this.props.sendQuery(queryText);
  // }
  

  // REFACTOR PROPS TO AVOID PASSING UNNECESSARY PROPS

  return (
    <div>
      {/* send functions that handle sending user input's data as props */}
      {/* <Dropdown sendQueryText={this.props.sendQuery} limit={this.props.limit} title={this.props.title} years={this.props.years} />
      <SearchBox sendQueryText={this.props.sendQuery} limit={this.props.limit} title={this.props.title} years={this.props.years} /> */}
      <Dropdown {...props} />
      <SearchBox {...props} />
      <Pagination {...props} />
    </div>
  )
};

export default SearchArea;