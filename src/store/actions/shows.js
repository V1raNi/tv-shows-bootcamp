import { apiCall } from '../../services/api';
import { LOAD_POP_SHOWS, LOAD_TREND_SHOWS } from '../actionTypes';

export const loadPopShows = popularShows => ({
  type: LOAD_POP_SHOWS,
  popularShows
});

export const loadTrendShows = trendingShows => ({
  type: LOAD_TREND_SHOWS,
  trendingShows
});

export const fetchPopShows = (query = 'page=1&limit=10') => {
  return async dispatch => {
    try {
      console.log(query);
      let url = `https://api.trakt.tv/shows/popular?extended=full&${query}`;
      console.log(url);
      const shows = await apiCall(url);
      return dispatch(loadPopShows(shows));
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
      return dispatch(loadTrendShows(shows));
    }
    catch (err) {
      console.log(err);
    }
  }
}
