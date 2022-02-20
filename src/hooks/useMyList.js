import {useEffect} from 'react';
import {Operations} from '../store/movies/moviesReducer.js';
import {useSelector, useDispatch} from 'react-redux';
import {Namespaces} from '../store/storeNamespaces';

const useReviews = () => {
  const dispatch = useDispatch();
  const myMoviesList = useSelector((state) => state[Namespaces.MOVIES].myListMovies);
  const loading = useSelector((state) => state[Namespaces.MOVIES].loadingMyMovies);
  useEffect(() => {
    dispatch(Operations.fetchMyListMovies());
  }, []);

  return {
    myMoviesList,
    loading
  };
};

export default useReviews;

