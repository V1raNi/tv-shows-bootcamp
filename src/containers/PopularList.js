import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { fetchPopShows, changeLoadingState } from '../store/actions/shows';
import ShowItem from '../components/ShowItem';

class PopularList extends Component {
  
  // componentDidMount() {
  //   this.props.changeLoadingState(true);
  //   this.props.fetchPopShows();
  // }

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
      <div className="divTableBody">
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

export default connect(mapStateToProps, null)(PopularList);