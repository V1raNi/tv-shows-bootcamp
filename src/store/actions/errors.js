import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';
import { changeLoadingState } from './loading';

export const addError = error => ({
  type: ADD_ERROR,
  error
});

export const removeError = () => ({
  type: REMOVE_ERROR
});

export const addErrorProcess = error => {
  return dispatch => {
    dispatch(addError(error));
    dispatch(changeLoadingState());
  }
}
