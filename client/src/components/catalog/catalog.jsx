import React from 'react';
import MovieList from '../movieList/movieList.jsx';
import Genreslist from '../genreList/genresList.jsx';
import PropTypes from 'prop-types';
import {getGenresList} from '../../helpers/utils.js';
import ShowMore from '../showMore/showMore.jsx';
import useCatalog from '../../hooks/useCatalog.js';

const Catalog = () => {
  const {
    showMoreHandler,
    filterChangeHandler,
    countedMoviesList,
    selectedGenre,
    moviesListByGenre,
    moviesList
  } = useCatalog();

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <Genreslist genres={getGenresList(moviesList)}
        onFilterChange={filterChangeHandler}
        currentGenre={selectedGenre}/>
      <MovieList moviesList={countedMoviesList}/>
      {
        countedMoviesList.length < moviesListByGenre.length ?
          (<div className="catalog__more">
            <ShowMore onClick={showMoreHandler}/>
          </div>)
          :
          null
      }

    </section>
  );
};

Catalog.propTypes = {
  moviesList: PropTypes.array
};

export default Catalog;


