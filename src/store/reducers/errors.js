import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';

export default (state = { message: 'No error' }, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, message: action.error };
    case REMOVE_ERROR:
      return { ...state, message: 'No error' };
    default:
      return state;
  }
};
