import React from 'react';
import MovieList from '../movieList/movieList.jsx';
import Genreslist from '../genreList/genresList.jsx';
import PropTypes from 'prop-types';
import {getGenresList, getMoviesByGenre, getCountedMoviesList} from '../../helpers/utils.js';
import {setActiveGenre, showMoreMovies, resetShownMoviesNumber} from '../../store/app/appReducer.js';
import {useSelector, useDispatch} from 'react-redux';
import {namespaces} from '../../store/namespaces.js';
import ShowMore from '../showMore/showMore.jsx';
import {MOVIES_TO_SHOW} from '../../constants/consts.js';


const Catalog = () => {
  const dispatch = useDispatch();
  const selectedGenre = useSelector((state) => state[namespaces.APP].currentGenre);
  const moviesList = useSelector((state) => state[namespaces.MOVIES].moviesList);
  const shownMoviesNumber = useSelector((state) => state[namespaces.APP].shownMoviesNumber);
  const moviesListByGenre = getMoviesByGenre(selectedGenre, moviesList);
  const countedMoviesList = getCountedMoviesList(moviesListByGenre, shownMoviesNumber);
  const filterChangeHandler = (genre) => {
    if (selectedGenre !== genre) {
      dispatch(resetShownMoviesNumber());
      dispatch(setActiveGenre(genre));
    }
  };

  const showMoreHandler = () => {
    dispatch(showMoreMovies(MOVIES_TO_SHOW));
  };

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


