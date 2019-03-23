import { CHANGE_LOADING_STATE  } from '../actionTypes';

export const changeLoadingState = (isLoading) => ({
  type: CHANGE_LOADING_STATE ,
  isLoading
});

export const changeLoadingStateFunction = (loading) => {
  return async dispatch => {
    try {
      const isLoading = loading;
      return dispatch(changeLoadingState(isLoading));
    }
    catch (err) {
      console.log(err);
    }
  }
}