import { apiCall } from '../../services/api';
import { LOAD_POP_SHOWS, LOAD_TREND_SHOWS } from '../actionTypes';

export const loadPopShows = (popularShows, items) => ({
  type: LOAD_POP_SHOWS,
  popularShows,
  items
});

export const loadTrendShows = (trendingShows, items) => ({
  type: LOAD_TREND_SHOWS,
  trendingShows,
  items
});

export const fetchPopShows = (query = 'page=1&limit=10') => {
  return async dispatch => {
    try {
      let url = `https://api.trakt.tv/shows/popular?extended=full&${query}`;
      const shows = await apiCall(url);
      const showList = shows[0];
      const items = shows[1];
      return dispatch(loadPopShows(showList, items));
    }
    catch (err) {
      console.log(err);
    }
  }
}

export const fetchTrendShows = (query = 'page=1&limit=10') => {
  return async dispatch => {
    try {
      let url = `https://api.trakt.tv/shows/trending?extended=full&${query}`;
      const shows = await apiCall(url);
      const showList = shows[0];
      const items = shows[1];
      return dispatch(loadTrendShows(showList, items));
    }
    catch (err) {
      console.log(err);
    }
  }
}
