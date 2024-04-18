import {useEffect, useState} from 'react';
import {Operations} from '../store/movies/moviesReducer';
import {useSelector, useDispatch} from 'react-redux';
import {namespaces} from '../store/namespaces';

const useReviews = (movieId) => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  useEffect(async () => {
    dispatch(Operations.fetchReviews(movieId)).then(() => {
      setLoading(false);
    });
  }, [dispatch, movieId]);

  const reviews = useSelector((state) => state[namespaces.MOVIES].reviews);
  return {
    reviews,
    isLoading
  };
};

export default useReviews;

