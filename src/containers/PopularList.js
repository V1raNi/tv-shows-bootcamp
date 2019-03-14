import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPopShows } from '../store/actions/shows';
import queryHandler from '../helpers/queryHandler';
import ShowItem from '../components/ShowItem';

class PopularList extends Component {
  
  componentDidMount() {
    this.props.fetchPopShows();
    // this.props.switchVisibility(true);
  }

  render() {
    const { shows } = this.props;
    let showsList = shows.map((show, i) => {
      const genres = show.genres.join(', ');
      const rating = show.rating.toFixed(2);
      return <ShowItem
        key={show.ids.trakt}
        number={i + 1}
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
      <div>
        {showsList}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    shows: state.shows.popularShows
  }
}

export default connect(mapStateToProps, { fetchPopShows })(PopularList);