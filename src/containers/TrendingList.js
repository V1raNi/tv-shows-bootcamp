import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTrendShows } from '../store/actions/shows';
import queryHandler from '../helpers/queryHandler';
import ShowItem from '../components/ShowItem';
import Table from '../components/Table';
import SearchArea from './SearchArea';
class TrendingList extends Component {
  
  componentDidMount() {
    this.props.fetchTrendShows();
    this.props.switchVisibility(true);
  }

  getShows = query => {
    const queryText = queryHandler(query);
    this.props.fetchTrendShows(queryText);
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
        <SearchArea sendRequestQuery={this.getShows}/>
        <div className="divTable">
          <Table page='trending' />
          <div className="divTableBody">
          {showsList}
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
    shows: state.shows.trendingShows
  }
}

export default connect(mapStateToProps, { fetchTrendShows })(TrendingList);