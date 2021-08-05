import React from 'react';
import MovieCard from '../movieCard/movieCard.jsx';
import Catalog from '../catalog/catalog.jsx';
import Footer from '../footer/footer.jsx';

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

export default Main;
