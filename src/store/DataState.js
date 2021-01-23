import React, { useReducer } from 'react';
import { createContext } from 'react';
import { FETCH_MOVIE_PAGE_DATA, FETCH_TV_SERIES_PAGE_DATA } from './types';
import dataReducer from './dataReducer';
import { ToastContainer, toast } from 'react-toastify';
export const WebContext = createContext();

const DataStateProvider = (props) => {
  const initialState = {
    moviePageData: [],
    tvSeriesPageData: [],
  };

  const [state, dispatch] = useReducer(dataReducer, initialState);

  const fetchDataForMoviePage = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=ef74c9143a537bb940d05be2d3873c3c&language=en-US&page=1'
      );
      const res = await response.json();

      dispatch({
        type: FETCH_MOVIE_PAGE_DATA,
        payload: res.results,
      });
    } catch (error) {
      const notify = () => toast('birşeyler yanlış');
      notify();
    }
  };

  const fetchDataForTvSeriesPage = async () => {
    try {
      const response = await fetch(
        'https://www.episodate.com/api/most-popular?page=1'
      );
      const res = await response.json();
      dispatch({
        type: FETCH_TV_SERIES_PAGE_DATA,
        payload: res,
      });
    } catch (error) {}
  };

  return (
    <WebContext.Provider
      value={{
        moviePageData: state.moviePageData,
        tvSeriesPageData: state.tvSeriesPageData,
        fetchDataForTvSeriesPage,
        fetchDataForMoviePage,
      }}
    >
      {props.children}
    </WebContext.Provider>
  );
};

export default DataStateProvider;
