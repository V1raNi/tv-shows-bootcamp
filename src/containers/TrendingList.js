import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTrendShows } from '../store/actions/shows';
import ShowItem from '../components/ShowItem';
import Table from '../components/Table';

class TrendingList extends Component {
  
  componentDidMount() {
    this.props.fetchTrendShows();
    this.props.switchNavBar(true);
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
        poster={show.imageUrl}
        description={show.show.overview}
      />
    ));
    return(
      <div className="divTable">
        <Table page='trending' />
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