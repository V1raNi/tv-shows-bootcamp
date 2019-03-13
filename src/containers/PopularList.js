import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPopShows } from '../store/actions/shows';
import ShowItem from '../components/ShowItem';
import Table from '../components/Table';

class PopularList extends Component {
  
  componentDidMount() {
    this.props.fetchPopShows();
    this.props.switchNavBar(true);
  }

  render() {
    const { shows } = this.props;
    let showsList = shows.map((show, i) => {
      return <ShowItem
        key={i}
        number={i + 1}
        ids={show.ids.trakt}
        title={show.title}
        year={show.year}
        status={show.status}
        rating={show.rating}
        poster={show.imageUrl}
        description={show.overview}
      />
    });

    return(
      <div className="divTable">
        <Table page='popular' />
        <div className="divTableBody">
          {showsList}
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