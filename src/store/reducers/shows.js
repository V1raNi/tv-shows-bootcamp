import {LOAD_POP_SHOWS, LOAD_TREND_SHOWS, CHANGE_LOADING_STATE} from '../actionTypes';

const initialState = {popularShows: [], trendingShows: [], pages: {}, isLoading: true}

const shows = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POP_SHOWS:
    return { ...state, popularShows: action.popularShows, pages: action.pages, isLoading: action.isLoading };
    case LOAD_TREND_SHOWS:
      return { ...state, trendingShows: action.trendingShows, pages: action.pages, isLoading: action.isLoading };
    case CHANGE_LOADING_STATE:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
}

export default shows;