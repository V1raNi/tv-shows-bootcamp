import { combineReducers } from 'redux';
import shows from './shows';
import errors from './errors';
import genres from './genres';
import loading from './loading';
import pages from './pages';

const rootReducer = combineReducers({
  shows,
  genres,
  errors,
  loading,
  pages,
});

export default rootReducer;
