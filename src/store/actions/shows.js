import { apiCall } from '../../services/api';
import { LOAD_POP_SHOWS, LOAD_TREND_SHOWS } from '../actionTypes';
import { changeLoadingState } from './loading';
import { loadPages } from './pages';
import { addErrorProcess, removeError } from './errors';

export const loadPopShows = (popularShows) => ({
  type: LOAD_POP_SHOWS,
  popularShows
});

export const loadTrendShows = (trendingShows) => ({
  type: LOAD_TREND_SHOWS,
  trendingShows
});

export const fetchPopShows = query => {
  return async dispatch => {
    try {
      let url = `https://api.trakt.tv/shows/popular?extended=full&${query}`;
      const data = await apiCall(url);
      const showList = data[0];
      const pages = data[1];
      dispatch(loadPages(pages.currentPage, pages.totalPages));
      dispatch(loadPopShows(showList, pages));
      dispatch(removeError());
      dispatch(changeLoadingState());
    }
    catch (err) {
      console.log(err);
      dispatch(addErrorProcess(err.errorMessage));
    }
  }
}

export const fetchTrendShows = query => {
  return async dispatch => {
    try {
      let url = `https://api.trakt.tv/shows/trending?extended=full&${query}`;
      const data = await apiCall(url);
      const showList = data[0];
      const pages = data[1];
      dispatch(loadPages(pages.currentPage, pages.totalPages));
      dispatch(loadTrendShows(showList, pages));
      dispatch(removeError());
      dispatch(changeLoadingState());
    }
    catch (err) {
      console.log(err);
      dispatch(addErrorProcess(err.errorMessage));
    }
  }
}
