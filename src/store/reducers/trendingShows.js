import {LOAD_TREND_SHOWS} from '../actionTypes';

const trendingShows = (state = [], action) => {
  switch (action.type) {
    case LOAD_TREND_SHOWS:
      return [...action.trendingShows];
    default:
      return state;
  }
}

export default trendingShows;