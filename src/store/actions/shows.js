import { traktApiCall } from '../../services/api';
import { LOAD_POP_SHOWS, LOAD_TREND_SHOWS } from '../actionTypes';

export const loadPopShows = popularShows => ({
  type: LOAD_POP_SHOWS,
  popularShows
});

export const loadTrendShows = trendingShows => ({
  type: LOAD_TREND_SHOWS,
  trendingShows
});

export const fetchPopShows = () => {
  return async dispatch => {
    try {
      const shows = await traktApiCall('https://api.trakt.tv/shows/popular?extended=full');
      return dispatch(loadPopShows(shows));
    }
    catch (err) {
      console.log(err);
    }
  }
}

export const fetchTrendShows = () => {
  return async dispatch => {
    try {
      const shows = await traktApiCall('https://api.trakt.tv/shows/trending?extended=full');
      return dispatch(loadTrendShows(shows));
    }
    catch (err) {
      console.log(err);
    }
  }
}