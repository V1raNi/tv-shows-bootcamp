import { LOAD_PAGES } from '../actionTypes';

export default (state = { totalPages: '', currentPage: '1' }, action) => {
  switch (action.type) {
    case LOAD_PAGES:
      return {
        ...state,
        totalPages: action.totalPages,
        currentPage: action.currentPage,
      };
    default:
      return state;
  }
};
