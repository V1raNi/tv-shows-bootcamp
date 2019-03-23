import React, { Component } from 'react';
import { connect } from 'react-redux';

import PopularList from './PopularList';
import TrendingList from './TrendingList';
import SearchArea from '../components/SearchArea';
import queryHandler from '../helpers/queryHandler';
import { fetchPopShows, fetchTrendShows } from '../store/actions/shows';
import { changeLoadingState } from '../store/actions/loading';
import TableHeader from '../components/TableHeader';
import { fetchGenres } from '../store/actions/genres';

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
      this.getShows();
    }
  }

  getShows = () => {
    const queryText = queryHandler(this.state);
    if (this.props.page === 'popular') {
      this.props.changeLoadingState();
      this.props.fetchPopShows(queryText);
    } else {
      this.props.changeLoadingState();
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


  render() {
    const isLoading = this.props.isLoading;
    let output;
    if (isLoading) {
      output = <div>Loading...</div>
    } else {
      output = this.props.page === 'trending' ? <TrendingList /> : <PopularList />
    }
    return (
      <div>
        <SearchArea
          sendQuery={this.handleQueryChange}
          limit={this.state.limit}
          title={this.state.title}
          years={this.state.years}
          genres={this.props.genres}
          totalPages={this.props.pages.totalPages}
          page={this.state.page}
        />
        {this.props.pages.totalPages !== '0'
          ?
            <div className="divTable">
              <TableHeader page={this.props.page} />
              {output}
            </div>
          :
          <div>
            <p>Sorry, no results found!</p>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    shows: state.shows.popularShows,
    pages: state.pages,
    isLoading: state.loading,
    genres: state.genres
  }
}

export default connect(mapStateToProps, { fetchPopShows, fetchTrendShows, changeLoadingState, fetchGenres })(Table);
