import {useEffect} from 'react';
import {Operations} from '../store/movies/moviesReducer.js';
import {useSelector, useDispatch} from 'react-redux';
import {namespaces} from '../store/namespaces';

const useReviews = () => {
  const dispatch = useDispatch();
  const myMoviesList = useSelector((state) => state[namespaces.MOVIES].myListMovies);
  const loading = useSelector((state) => state[namespaces.MOVIES].loadingMyMovies);
  useEffect(() => {
    dispatch(Operations.fetchMyListMovies());
  }, []);

  return {
    myMoviesList,
    loading
  };
};

export default useReviews;

