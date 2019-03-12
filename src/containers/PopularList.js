import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPopShows } from '../store/actions/shows';
import ShowItem from '../components/ShowItem';

class PopularList extends Component {
  
  componentDidMount() {
    this.props.fetchPopShows();
  }

  render() {
    const { shows } = this.props;
    let showsTable = shows.map((show, i) => (
      <ShowItem
        key={i}
        number={i + 1}
        ids={show.ids.trakt}
        title={show.title}
        year={show.year}
        poster='poster'
        description='description'
      />
    ));
    return(
      <div className="divTable">
        <div className="divTableHeading">
          <div className="divTableRow">
            <div className="divTableHead">Number</div>
            <div className="divTableHead">ID</div>
            <div className="divTableHead">Title</div>
            <div className="divTableHead">Year</div>
            <div className="divTableHead">Poster</div>
            <div className="divTableHead">Description</div>
          </div>
        </div>
        <div className="divTableBody">
          {showsTable}
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