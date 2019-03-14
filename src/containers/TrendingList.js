import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTrendShows } from '../store/actions/shows';
import queryHandler from '../helpers/queryHandler';
import ShowItem from '../components/ShowItem';
import TableHeader from '../components/TableHeader';
import SearchArea from './SearchArea';
class TrendingList extends Component {
  
  componentDidMount() {
    this.props.fetchTrendShows();
    // this.props.switchVisibility(true);
  }

  render() {
    const { shows } = this.props;
    let showsList = shows.map((show, i) => {
      const genres = show.show.genres.join(', ');
      const rating = show.show.rating.toFixed(2);
      return <ShowItem
        key={show.show.ids.trakt}
        number={i + 1}
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
      <div>
        {showsList}
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