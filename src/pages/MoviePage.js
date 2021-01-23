import React, { useEffect, useContext } from 'react';
import { WebContext } from '../store/DataState';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MoviePage = () => {
  const { fetchDataForMoviePage, moviePageData } = useContext(WebContext);
  useEffect(() => {
    fetchDataForMoviePage();
  }, []);
  console.log(moviePageData);

  return (
    <div>
      {moviePageData.map((e) => {
        return <h1>{e.original_title}</h1>;
      })}
      <ToastContainer />
    </div>
  );
};

export default MoviePage;
