import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { fetchTrendShows, changeLoadingState } from '../store/actions/shows';
import ShowItem from '../components/ShowItem';
class TrendingList extends Component {
  
  // componentDidMount() {
  //   this.props.changeLoadingState(true);
  //   this.props.fetchTrendShows();
  // }

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
      <div className="divTableBody">
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

export default connect(mapStateToProps, null)(TrendingList);