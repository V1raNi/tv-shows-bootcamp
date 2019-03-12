import { combineReducers } from 'redux';
// import popularShows from './popularShows';
// import trendingShows from './trendingShows';
import shows from './shows';
import errors from './errors';

const rootReducer = combineReducers({
  shows,
  errors
});

export default rootReducer;