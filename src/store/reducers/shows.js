import { LOAD_POP_SHOWS, LOAD_TREND_SHOWS } from '../actionTypes';

const initialState = { popularShows: [], trendingShows: [] };

const shows = (state = initialState, action) => {
  switch (action.type) {
    // do I use everything correctly? don't I mutate state?
    case LOAD_POP_SHOWS:
      return { ...state, popularShows: action.popularShows };
    case LOAD_TREND_SHOWS:
      return { ...state, trendingShows: action.trendingShows };
    default:
      return state;
  }
};
export default shows;
