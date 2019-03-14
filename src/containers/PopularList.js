import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPopShows } from '../store/actions/shows';
import queryHandler from '../helpers/queryHandler';
import ShowItem from '../components/ShowItem';
import Table from '../components/Table';
import SearchArea from './SearchArea';

class PopularList extends Component {
  
  componentDidMount() {
    this.props.fetchPopShows();
    this.props.switchVisibility(true);
  }

  getShows = query => {
    const queryText = queryHandler(query);
    this.props.fetchPopShows(queryText);
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
        <SearchArea sendRequestQuery={this.getShows}/>
        <div className="divTable">
          <Table page='popular' />
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
    shows: state.shows.popularShows
  }
}

export default connect(mapStateToProps, { fetchPopShows })(PopularList);