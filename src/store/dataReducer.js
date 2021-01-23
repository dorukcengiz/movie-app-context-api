import { FETCH_MOVIE_PAGE_DATA, FETCH_TV_SERIES_PAGE_DATA } from './types';

export default (state, action) => {
  switch (action.type) {
    case FETCH_MOVIE_PAGE_DATA:
      return {
        ...state,
        moviePageData: action.payload,
      };
    case FETCH_TV_SERIES_PAGE_DATA:
      return {
        ...state,
        TvSeriesSayfaData: action.payload,
      };
    default:
      return state;
  }
};
