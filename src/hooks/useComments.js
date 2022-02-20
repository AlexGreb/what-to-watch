import {useState, useEffect} from 'react';
import {Operations, setSendingReviewStatus} from '../store/movies/moviesReducer.js';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {AppRoute, Tabs} from '../constants/consts.ts';
import {Namespaces} from '../store/storeNamespaces.ts';

const isValidationReviewForm = (formData) => {
  let isValid = true;
  if (formData.comment == null || formData.comment != null && formData.comment.length === 0) {
    isValid = false;
  }
  if (formData.rating == null) {
    isValid = false;
  }

  return isValid;
};

const useComments = (movieId, ref) => {
  const sendingReviewStatus = useSelector((state) => state[Namespaces.MOVIES].sendingReviewStatus);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [reviewData, changeReviewData] = useState({});
  const [isValid, changeIsValid] = useState(false);
  const textarea = ref.current;

  useEffect(() => {
    if (sendingReviewStatus) {
      navigator(`${AppRoute.FILMS}${movieId}?tab=${Tabs.REVIEWS}`);
      dispatch(setSendingReviewStatus(false));
    }
  }, [sendingReviewStatus]);

  const sendCommentHandler = (event, review) => {
    event.preventDefault();
    dispatch(Operations.fetchComment({
      movieId,
      review
    }));

  };

  const changeTextReviewHandler = () => {
    const newValue = {
      ...reviewData,
      comment: textarea.value
    };
    changeReviewData(newValue);
    changeIsValid(isValidationReviewForm(newValue));
  };

  const changeRatingHandler = (event) => {
    const target = event.target;
    const value = target.value;
    const newValue = {
      ...reviewData,
      rating: value
    };
    changeReviewData(newValue);
    changeIsValid(isValidationReviewForm(newValue));
  };

  return {
    isValid,
    sendCommentHandler,
    changeTextReviewHandler,
    changeRatingHandler,
    reviewData
  };
};

export default useComments;
