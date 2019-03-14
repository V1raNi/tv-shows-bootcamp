import React, { Component } from 'react';
import { connect } from 'react-redux';

import PopularList from './PopularList';
import TrendingList from './TrendingList';
import SearchArea from './SearchArea';
import queryHandler from '../helpers/queryHandler';
import { fetchPopShows, fetchTrendShows } from '../store/actions/shows';

class Table extends Component {
  componentDidMount() {
    // removed this since it requires navbar links to call the fetch function
    // if (this.props.page === 'popular') {
    //   this.props.fetchPopShows();
    // } else {
    //   this.props.fetchTrendShows();
    // }
    this.props.switchVisibility(true);
  }

  getShows = query => {
    const queryText = queryHandler(query);
    if (this.props.page === 'popular') {
      this.props.fetchPopShows(queryText);
    } else {
      this.props.fetchTrendShows(queryText);
    }
  }

  render() {
    return (
      <div>
        <SearchArea sendRequestQuery={this.getShows}/>
        <div className="divTable">
          <div className="divTableHeading">
            <div className="divTableRow">
              <div className="divTableHead">Number</div>
              <div className="divTableHead">Title</div>
              <div className="divTableHead">Year</div>
              <div className="divTableHead">Genres</div>
              <div className="divTableHead">Status</div>
              <div className="divTableHead">Rating</div>
              <div className="divTableHead">Poster</div>
              {this.props.page === 'trending' && (
                <div className="divTableHead">Watchers</div>
              )}
              <div className="divTableHead">Description</div>
            </div>
          </div>
          {this.props.page === 'trending' ? <TrendingList /> : <PopularList />}
          <div className="links">
            <button>&laquo;</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>&raquo;</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    shows: state.shows.popularShows
  }
}

export default connect(mapStateToProps, { fetchPopShows, fetchTrendShows })(Table);
