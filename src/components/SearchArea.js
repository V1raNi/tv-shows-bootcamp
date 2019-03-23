import React from 'react';

import Dropdown from './Dropdown';
import SearchBox from './SearchBox';
import Pagination from './Pagination';

const SearchArea = (props) => {
  
  // unnecessary function? should I use React.Context here? 
  // handleQuery = queryText => {
  //   this.props.sendQuery(queryText);
  // }
  
  // console.log(props)
  const resetFilters = () => {
    const queryContent = {
      page: 1,
      limit: '10',
      title: '',
      years: '',
      genres: []
    };
    props.sendQuery(queryContent);
  }

  // REFACTOR PROPS TO AVOID PASSING UNNECESSARY PROPS

  return (
    <div>
      {/* send functions that handle sending user input's data as props */}
      {/* <Dropdown sendQueryText={this.props.sendQuery} limit={this.props.limit} title={this.props.title} years={this.props.years} />
      <SearchBox sendQueryText={this.props.sendQuery} limit={this.props.limit} title={this.props.title} years={this.props.years} /> */}
      <Dropdown {...props} />
      <SearchBox {...props} handleReset={resetFilters} />
      <Pagination {...props} />
    </div>
  )
};

export default SearchArea;