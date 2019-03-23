import { CHANGE_LOADING_STATE } from '../actionTypes';

export default (state = false, action) => {
// export default (state = {isLoading: true}, action) => {
  switch(action.type) {
    case CHANGE_LOADING_STATE:
        return !state;
    default:
      return state;
  }
};
