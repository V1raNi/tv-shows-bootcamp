import { apiCall } from '../../services/api';
// import { addError } from './errors';
import {LOAD_TREND_SHOWS} from '../actionTypes';

export const loadTrendShows = trendingShows => ({
  type: LOAD_TREND_SHOWS,
  trendingShows
});

export const fetchTrendShows = () => {
  return async dispatch => {
    try {
      const shows = await apiCall('https://api.trakt.tv/shows/trending');
      return dispatch(loadTrendShows(shows));
    }
    catch (err) {
      console.log(err);
    }
  }
}