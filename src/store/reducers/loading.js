import { CHANGE_LOADING_STATE } from '../actionTypes';

export default (state = {isLoading: true}, action) => {
  switch(action.type) {
    case CHANGE_LOADING_STATE:
      return {...state, isLoading: action.isLoading };
    default:
      return state
  }
};
