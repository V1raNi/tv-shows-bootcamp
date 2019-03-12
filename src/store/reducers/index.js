import { combineReducers } from 'redux';
import popularShows from './popularShows';
import trendingShows from './trendingShows';
import errors from './errors';

const rootReducer = combineReducers({
  trendingShows,
  popularShows,
  errors
});

export default rootReducer;