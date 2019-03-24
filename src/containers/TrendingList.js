import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShowItem from '../components/ShowItem';
class TrendingList extends Component {

  render() {
    const { shows, onPage, page } = this.props;
    let showsList = shows.map((show, i) => {
      const genres = show.show.genres.join(', ');
      const rating = show.show.rating.toFixed(2);
      const number = (page - 1) * onPage + i + 1;
      return <ShowItem
        key={show.show.ids.trakt}
        number={number}
        title={show.show.title}
        watchers={show.watchers}
        year={show.show.year}
        genres={genres}
        status={show.show.status}
        rating={rating}
        poster={show.imageUrl}
        description={show.show.overview}
      />
    });
    return(
      <div className="table-body">
        {showsList}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    shows: state.shows.trendingShows,
    page: state.pages.currentPage
  }
}

export default connect(mapStateToProps, null)(TrendingList);