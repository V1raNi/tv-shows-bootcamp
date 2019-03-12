import {LOAD_POP_SHOWS} from '../actionTypes';

const popularShows = (state = [], action) => {
  switch (action.type) {
    case LOAD_POP_SHOWS:
      return [...action.popularShows];
    default:
      return state;
  }
}

export default popularShows;