import React, { Component } from 'react';
import { connect } from 'react-redux';

import PopularList from './PopularList';
import TrendingList from './TrendingList';
import SearchArea from '../components/SearchArea';
import queryHandler from '../helpers/queryHandler';
import { fetchPopShows, fetchTrendShows, changeLoadingState } from '../store/actions/shows';
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
      this.props.changeLoadingState(true);
      this.props.fetchPopShows(queryText);
    } else {
      this.props.changeLoadingState(true);
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
    const { limit, page, title, years, genres } = queryText;
    this.setState({
      page,
      limit,
      title,
      years,
      genres
    }, () => this.getShows());
  }


  render() {
    // console.log(this.props.pages);
    // const showItems = this.props.items;
    // const showNumber = parseInt(showItems, 10);
    // const limitPerPage = parseInt(this.state.limit, 10);
    // const totalPages = Math.ceil(showNumber / limitPerPage);
    // // <div className="links">
    // //         <button>&laquo;</button>
    // //         <button id="5" onClick={this.handleSubmit} className="active">1</button>
    // //         <button>2</button>
    // //         <button>3</button>
    // //         <button>4</button>
    // //         <button>&raquo;</button>
    // //       </div>
    // console.log(this.state);
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
        />
        <div className="divTable">
          <TableHeader page={this.props.page} />
          {output}
          {/* get table footer here */}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    shows: state.shows.popularShows,
    pages: state.shows.pages,
    isLoading: state.shows.isLoading,
    genres: state.genres
  }
}

export default connect(mapStateToProps, { fetchPopShows, fetchTrendShows, changeLoadingState, fetchGenres })(Table);
