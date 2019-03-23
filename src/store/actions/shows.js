import { apiCall } from '../../services/api';
import { LOAD_POP_SHOWS, LOAD_TREND_SHOWS, CHANGE_LOADING_STATE } from '../actionTypes';

export const loadPopShows = (popularShows, pages, isLoading) => ({
  type: LOAD_POP_SHOWS,
  popularShows,
  pages,
  isLoading
});

export const loadTrendShows = (trendingShows, pages, isLoading) => ({
  type: LOAD_TREND_SHOWS,
  trendingShows,
  pages,
  isLoading
});

export const changeLoadingState = isLoading => ({
  type: CHANGE_LOADING_STATE,
  isLoading
});

export const fetchPopShows = query => {
  return async dispatch => {
    try {
      let url = `https://api.trakt.tv/shows/popular?extended=full&${query}`;
      const data = await apiCall(url);
      const showList = data[0];
      const pages = data[1];
      const isLoading = false;
      // dispatch changeLoadingState?
      dispatch(loadPopShows(showList, pages, isLoading));
    }
    catch (err) {
      console.log(err);
    }
  }
}

export const fetchTrendShows = query => {
  return async dispatch => {
    try {
      let url = `https://api.trakt.tv/shows/trending?extended=full&${query}`;
      const data = await apiCall(url);
      const showList = data[0];
      const pages = data[1];
      const isLoading = false;
      dispatch(loadTrendShows(showList, pages, isLoading));
    }
    catch (err) {
      console.log(err);
    }
  }
}
