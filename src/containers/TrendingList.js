import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTrendShows } from '../store/actions/trendingShows';
import ShowItem from '../components/ShowItem';

class TrendingList extends Component {
  
  componentDidMount() {
    this.props.fetchTrendShows();
  }

  render() {
    const { shows } = this.props;
    let showsTable = shows.map((show, i) => (
      <ShowItem
        key={i}
        number={i + 1}
        ids={show.show.ids.trakt}
        title={show.show.title}
        watchers={show.watchers}
        year={show.show.year}
        poster='poster'
        description='description'
      />
    ));
    return(
      <div>
        <div className="header-row">
          <div className="cell header-cell">Number</div>
          <div className="cell header-cell">ID</div>
          <div className="cell header-cell">Title</div>
          <div className="cell header-cell">Year</div>
          <div className="cell header-cell">Poster</div>
          <div className="cell header-cell">Watchers</div>
          <div className="cell header-cell">Description</div>
        </div>
        <div className="shows-list">
          {showsTable}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    shows: state.trendingShows
  }
}

export default connect(mapStateToProps, { fetchTrendShows })(TrendingList);