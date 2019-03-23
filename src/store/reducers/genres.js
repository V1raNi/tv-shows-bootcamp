import { GET_GENRES } from '../actionTypes';

export default (state = [], action) => {
  switch(action.type) {
    case GET_GENRES:
      return [...action.genres];
    default:
      return state
  }
};
