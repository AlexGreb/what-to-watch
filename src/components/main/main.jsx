import React from 'react';
import MovieCard from '../movieCard/movieCard.jsx';
import Catalog from '../catalog/catalog.jsx';
import Footer from '../footer/footer.tsx';
import PropTypes from 'prop-types';
const Main = () => {
  return (
    <>
      <MovieCard/>
      <div className="page-content">
        <Catalog/>
        <Footer/>
      </div>
    </>
  );
};

Main.propTypes = {
  moviesList: PropTypes.array
};


export default Main;
