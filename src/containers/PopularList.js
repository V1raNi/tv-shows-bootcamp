import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPopShows } from '../store/actions/shows';
import { fanartApiCall } from '../services/api';
import ShowItem from '../components/ShowItem';

class PopularList extends Component {
  
  componentDidMount() {
    this.props.fetchPopShows();
  }

  render() {
    const { shows } = this.props;
    let showsList = shows.map((show, i) => {
      let posterUrl = `http://webservice.fanart.tv/v3/tv/${show.ids.tvdb}?api_key=${process.env.REACT_APP_FANART_API_KEY}`
      // fanartApiCall(posterUrl)
      //   .then(res => {
      //     let poster = res.tvposter[0].url;
      //     return poster;
      //   })
      //   .then((res) => res)
      //   .catch(err => console.log(err));
      // let getPoster = async () => {
      //   let poster = await fanartApiCall(posterUrl);
      //   let image = poster.tvposter[0].url;
      //   return image;
      // }
      return <ShowItem
        key={i}
        number={i + 1}
        ids={show.ids.trakt}
        title={show.title}
        year={show.year}
        status={show.status}
        rating={show.rating}
        // poster={poster}
        description={show.overview}
      />
    });

    return(
      <div className="divTable">
        <div className="divTableHeading">
          <div className="divTableRow">
            <div className="divTableHead">Number</div>
            <div className="divTableHead">ID</div>
            <div className="divTableHead">Title</div>
            <div className="divTableHead">Year</div>
            <div className="divTableHead">Status</div>
            <div className="divTableHead">Rating</div>
            <div className="divTableHead">Poster</div>
            <div className="divTableHead">Description</div>
          </div>
        </div>
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