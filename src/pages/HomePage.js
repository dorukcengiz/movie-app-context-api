import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <NavLink to='/movie-page'>MOVIE</NavLink>
      <NavLink to='/tv-series-page'>TV SERIES</NavLink>
    </div>
  );
};

export default HomePage;
