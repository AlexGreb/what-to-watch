import {useDispatch, useSelector} from 'react-redux';
import {getMoviesByGenre, getCountedMoviesList} from '../helpers/utils.js';
import {setActiveGenre, showMoreMovies, resetShownMoviesNumber} from '../store/app/appReducer.ts';
import {Namespaces} from '../store/storeNamespaces.ts';
import {MOVIES_TO_SHOW} from '../constants/consts.ts';

function useCatalog() {

  const dispatch = useDispatch();
  const selectedGenre = useSelector((state) => state[Namespaces.APP].currentGenre);
  const moviesList = useSelector((state) => state[Namespaces.MOVIES].moviesList);
  const shownMoviesNumber = useSelector((state) => state[Namespaces.APP].shownMoviesNumber);
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

  return {
    showMoreHandler,
    filterChangeHandler,
    countedMoviesList,
    selectedGenre,
    moviesListByGenre,
    moviesList
  };
}

export default useCatalog;
