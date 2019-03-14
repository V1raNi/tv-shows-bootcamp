import {LOAD_POP_SHOWS, LOAD_TREND_SHOWS} from '../actionTypes';

const initialState = {popularShows: [], trendingShows: []}

const shows = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POP_SHOWS:
    return { ...state, popularShows: action.popularShows, items: action.items };
    case LOAD_TREND_SHOWS:
      return { ...state, trendingShows: action.trendingShows, items: action.items }
    default:
      return state;
  }
}

export default shows;