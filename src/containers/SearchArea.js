import React, { Component } from 'react';

import Dropdown from '../components/Dropdown';
import SearchBox from '../components/SearchBox';

class SearchArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryContent: {
        limit: '10',
        title: '',
        years: ''
      }
    }
  }
    
  requestQuery = query => {
    this.props.sendRequestQuery(query);
  }

  handleQuery = queryText => {
    const {limit, title, years} = queryText;
    this.setState({
      queryContent: {
        limit,
        title,
        years
      }
    }, () => this.props.sendRequestQuery(this.state.queryContent));
  }
  
  render() {
    return (
      <div>
        {/* send functions that handle sending user input's data as props */}
        <Dropdown requestQuery={this.handleQuery} limit={this.state.queryContent.limit} title={this.state.queryContent.title} years={this.state.queryContent.years} />
        <SearchBox requestQuery={this.handleQuery} limit={this.state.queryContent.limit} title={this.state.queryContent.title} years={this.state.queryContent.years} />
      </div>
    )
  }
};

export default SearchArea;