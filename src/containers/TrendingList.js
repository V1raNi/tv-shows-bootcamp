import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTrendShows } from '../store/actions/shows';
import ShowItem from '../components/ShowItem';

class TrendingList extends Component {
  
  componentDidMount() {
    this.props.fetchTrendShows();
  }

  render() {
    const { shows } = this.props;
    let showsList = shows.map((show, i) => (
      <ShowItem
        key={i}
        number={i + 1}
        ids={show.show.ids.trakt}
        title={show.show.title}
        watchers={show.watchers}
        year={show.show.year}
        status={show.show.status}
        rating={show.show.rating}
        poster='poster'
        description={show.show.overview}
      />
    ));
    return(
      <div className="divTable">
        <div className="divTableHeading">
          <div className="divTableRow">
            <div className="divTableHead">Number</div>
            <div className="divTableHead">ID</div>
            <div className="divTableHead">Title</div>
            <div className="divTableHead">Year</div>
            <div className="divTableHead">Status</div>
            <div className="divTableHead">Poster</div>
            <div className="divTableHead">Rating</div>
            <div className="divTableHead">Watchers</div>
            <div className="divTableHead">Description</div>
          </div>
        </div>
        <div className="divTableBody">
          {showsList}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    shows: state.shows.trendingShows
  }
}

export default connect(mapStateToProps, { fetchTrendShows })(TrendingList);