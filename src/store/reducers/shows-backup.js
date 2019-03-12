import {LOAD_POP_SHOWS, LOAD_TREND_SHOWS} from '../actionTypes';

const shows = (state = [], action) => {
  switch (action.type) {
    case LOAD_POP_SHOWS:
      return state.popularShows = [...action.popularShows];
    case LOAD_TREND_SHOWS:
      return state.trendingShows = [...action.trendingShows];
    default:
      return state;
  }
}

export default shows;