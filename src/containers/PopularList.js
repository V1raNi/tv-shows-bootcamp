import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ShowItem from '../components/ShowItem';

const PopularList = ({ shows, onPage, page }) => {
  const showsList = shows.map((show, i) => {
    const genres = show.genres.join(', ');
    const rating = show.rating.toFixed(2);
    const number = (page - 1) * onPage + i + 1;
    return (
      <ShowItem
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
    );
  });

  return <div className="table-body">{showsList}</div>;
};

function mapStateToProps(state) {
  return {
    shows: state.shows.popularShows,
    page: state.pages.currentPage,
  };
}

PopularList.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.object).isRequired,
  onPage: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(PopularList);
