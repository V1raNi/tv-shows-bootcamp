import { LOAD_PAGES } from '../actionTypes';

export const loadPages = (currentPage, totalPages) => ({
  type: LOAD_PAGES,
  currentPage,
  totalPages
});

