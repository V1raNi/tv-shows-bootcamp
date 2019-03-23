import { LOAD_PAGES } from '../actionTypes';

export default (state = {}, action) => {
  switch(action.type) {
    case LOAD_PAGES:
      return {...state, totalPages: action.pages};
    default:
      return state
  }
};
