import { combineReducers } from 'redux';
import shows from './shows';
import errors from './errors';
import genres from './genres';

const rootReducer = combineReducers({
  shows,
  genres,
  errors
});

export default rootReducer;