import React, { Component } from 'react';
import { connect } from 'react-redux';

import PopularList from '../containers/PopularList';
import TrendingList from '../containers/TrendingList';
import SearchArea from '../containers/SearchArea'
import queryHandler from '../helpers/queryHandler';
import { fetchPopShows, fetchTrendShows } from '../store/actions/shows';

class TableHeader extends Component {

  componentDidMount() {
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
            <div className="divTableBody">
              {(this.props.page === 'trending') ? 
              (
                <TrendingList />
              )
              :
              (
                <PopularList />
              )
              }
            </div>
            <div class="links">
              <a href="#">&laquo;</a>
              <a class="active" href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">&raquo;</a>
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

export default connect(mapStateToProps, { fetchPopShows, fetchTrendShows })(TableHeader);
