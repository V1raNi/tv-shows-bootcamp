import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// import SortingArea from './SortingArea';
import PopularList from './PopularList';
import TrendingList from './TrendingList';
import TableHeader from '../components/TableHeader';
import Pagination from '../components/Pagination.js';
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
      genres: []
    }
  }

  componentDidMount() {
    this.props.switchVisibility(true);
    this.getShows();
    this.props.fetchGenres();
  }

  componentDidUpdate(prevProps) {
    if (this.props.page !== prevProps.page) {
      this.setState({
        page: '1',
        limit: '10',
        title: '',
        years: '',
        genres: []
      }, () => this.getShows());
    }
  }

  // there is a bug: if loading takes too much, changing page brakes the loading state
  getShows = () => {
    const queryText = queryHandler(this.state);
    this.props.changeLoadingState();
    if (this.props.page === 'popular') {
      this.props.fetchPopShows(queryText);
    } else {
      this.props.fetchTrendShows(queryText);
    }
  }

  // for version with controlled inputs
  // handleChange = e => {
  //   if (e.target === undefined && typeof e === 'object') {
  //     let genres = e.map(genre => {
  //       return genre.value;
  //     });
  //     this.setState({
  //       genres
  //     });
  //   } else {
  //     this.setState({
  //       [e.target.name]: e.target.value
  //     });
  //   }
  // }

  handleQueryChange = queryText => {
    const {
      limit = this.state.limit,
      page = this.state.page,
      title = this.state.title,
      years = this.state.years,
      genres = this.state.genres
    } = queryText;
    this.setState({
      page,
      limit,
      title,
      years,
      genres
    }, () => this.getShows());
  }


  renderTable = () => {
    const pagination = (
      <Pagination
        page={this.state.page}
        sendQuery={this.handleQueryChange}
        totalPages={this.props.pages.totalPages}
      />
    );
    const isLoading = this.props.isLoading;

    if (isLoading) {
      return (<div className="loading">Loading...</div>);
    }

    if (this.props.page === 'trending') {
      return (
        <Fragment>
          {pagination}
          <div className="table">
            <TableHeader page={this.props.page} />
            <TrendingList onPage={this.state.limit} />
          </div>
          {pagination}
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          {pagination}
          <div className="table">
            <TableHeader page={this.props.page} />
            <PopularList onPage={this.state.limit} />
          </div>
          {pagination}
        </Fragment>
      );
    }
  }

  render() {
    

    return (
      <Fragment>
        <SearchArea
          sendQuery={this.handleQueryChange}
          genres={this.props.genres}
        />
        {/* <SortingArea 
          page={this.props.page}
        /> */}
        {this.props.pages.totalPages !== '0'
          ?
            <div className="content">
              {this.renderTable()}
            </div>
          :
          <div className="no-content">
            <p>Sorry, no results found!</p>
          </div>
        }
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    pages: state.pages,
    isLoading: state.loading,
    genres: state.genres
  }
}

export default connect(mapStateToProps, { fetchPopShows, fetchTrendShows, changeLoadingState, fetchGenres })(Table);
