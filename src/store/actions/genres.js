import { getGenres } from '../../services/api';
import { GET_GENRES } from '../actionTypes';

export const loadGenres = (genres) => ({
  type: GET_GENRES,
  genres
});

export const fetchGenres = () => {
  return async dispatch => {
    try {
      const data = await getGenres();
      return dispatch(loadGenres(data));
    }
    catch (err) {
      console.log(err);
    }
  }
}