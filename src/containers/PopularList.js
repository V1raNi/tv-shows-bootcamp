import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShowItem from '../components/ShowItem';

class PopularList extends Component {
  
  render() {
    const { shows, onPage, page } = this.props;
    let showsList = shows.map((show, i) => {
      const genres = show.genres.join(', ');
      const rating = show.rating.toFixed(2);
      const number = (page - 1) * onPage + i + 1;
      return <ShowItem
        key={show.ids.trakt}
        number={number}
        title={show.title}
        year={show.year}
        status={show.status}
        genres={genres}
        rating={rating}
        poster={show.imageUrl}
        description={show.overview}
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
    shows: state.shows.popularShows,
    page: state.pages.currentPage
  }
}

export default connect(mapStateToProps, null)(PopularList);