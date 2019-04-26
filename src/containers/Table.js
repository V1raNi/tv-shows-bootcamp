import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PopularList from './PopularList';
import TrendingList from './TrendingList';
import TableHeader from '../components/TableHeader';
import Pagination from '../components/Pagination';
import SearchArea from '../components/SearchArea';
import { fetchPopShows, fetchTrendShows } from '../store/actions/shows';
import { changeLoadingState } from '../store/actions/loading';
import { fetchGenres } from '../store/actions/genres';
import queryHandler from '../helpers/queryHandler';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '1',
      limit: '10',
      title: '',
      years: '',
      genres: [],
    };
  }

  componentDidMount() {
    this.props.switchVisibility(true);
    this.getShows();
    this.props.fetchGenres();
  }

  componentDidUpdate(prevProps) {
    if (this.props.page !== prevProps.page) {
      this.setState(
        {
          page: '1',
          title: '',
          years: '',
          genres: [],
        },
        () => this.getShows(),
      );
    }
  }

  getShows = () => {
    const queryText = queryHandler(this.state);
    this.props.changeLoadingState();
    if (this.props.page === 'popular') {
      this.props.fetchPopShows(queryText);
    } else {
      this.props.fetchTrendShows(queryText);
    }
  };

  handleQueryChange = queryText => {
    const {
      limit = this.state.limit,
      page = this.state.page,
      title = this.state.title,
      years = this.state.years,
      genres = this.state.genres,
    } = queryText;
    this.setState(
      {
        page,
        limit,
        title,
        years,
        genres,
      },
      () => this.getShows(),
    );
  };

  renderTable = () => {
    const { isLoading, page, error } = this.props;
    const pagination = (
      <Pagination
        page={this.state.page}
        sendQuery={this.handleQueryChange}
        totalPages={this.props.pages.totalPages}
        className="pagination"
      />
    );

    if (isLoading) {
      return <div className="loading" />;
    }

    if (error !== 'No error') {
      return <h3>{error}</h3>;
    }

    if (page === 'trending') {
      return (
        <Fragment>
          {pagination}
          <div className="table">
            <TableHeader page={page} />
            <TrendingList onPage={this.state.limit} />
          </div>
          {pagination}
        </Fragment>
      );
    }
    return (
      <Fragment>
        {pagination}
        <div className="table">
          <TableHeader page={page} />
          <PopularList onPage={this.state.limit} />
        </div>
        {pagination}
      </Fragment>
    );
  };

  renderHeading = () => {
    const result = [];
    if (this.state.years !== '') {
      result.push(`${this.state.years} year`);
    }
    if (this.state.title !== '') {
      result.push(`"${this.state.title}" title`);
    }

    const genresList = this.state.genres.map(genre => {
      return genre.label;
    });

    if (genresList.length === 1) {
      result.push(`"${genresList[0]}" genre`);
    } else if (genresList.length > 1) {
      result.push(`"${genresList.join(', ')}" genres`);
    }

    if (result.length > 0) {
      return `Showing results filtered by: ${result.join(', ')}`;
    }

    return null;
  };

  render() {
    return (
      <Fragment>
        {this.props.page === 'popular' ? (
          <h2>Discover the most popular TV shows</h2>
        ) : (
          <h2>See what TV shows are trending right now</h2>
        )}
        <SearchArea
          sendQuery={this.handleQueryChange}
          genres={this.props.genres}
          limit={this.state.limit}
        />
        <h3>{this.renderHeading()}</h3>
        {this.props.pages.totalPages !== '0' ? (
          <div className="content">{this.renderTable()}</div>
        ) : (
          <div className="no-content">
            <h3>Sorry, no results found!</h3>
          </div>
        )}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    pages: state.pages,
    isLoading: state.loading,
    genres: state.genres,
    error: state.errors.message,
  };
}

Table.propTypes = {
  switchVisibility: PropTypes.func.isRequired,
  fetchGenres: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  changeLoadingState: PropTypes.func.isRequired,
  fetchPopShows: PropTypes.func.isRequired,
  fetchTrendShows: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  pages: PropTypes.objectOf(PropTypes.string).isRequired,
  error: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  { fetchPopShows, fetchTrendShows, changeLoadingState, fetchGenres },
)(Table);
