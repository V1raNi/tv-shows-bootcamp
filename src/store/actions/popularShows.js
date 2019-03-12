import { apiCall } from '../../services/api';
// import { addError } from './errors';
import {LOAD_POP_SHOWS} from '../actionTypes';

export const loadPopShows = popularShows => ({
  type: LOAD_POP_SHOWS,
  popularShows
});


export const fetchPopShows = () => {
  return async dispatch => {
    try {
      const shows = await apiCall('https://api.trakt.tv/shows/popular');
      return dispatch(loadPopShows(shows));
    }
    catch (err) {
      console.log(err);
    }
  }
}
