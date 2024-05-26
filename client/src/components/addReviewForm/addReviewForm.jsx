import React, {useRef} from 'react';
import useComments from '../../hooks/useComments';
import PropTypes from 'prop-types';

const AddReview = ({movie}) => {
  const textarea = useRef(null);
  const {changeRatingHandler, isValid, changeTextReviewHandler, sendCommentHandler, reviewData} = useComments(movie.id, textarea);

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          <input className="rating__input" onClick={changeRatingHandler} id="star-1" type="radio" name="rating" value="1"/>
          <label className="rating__label" htmlFor="star-1">Rating 1</label>

          <input className="rating__input" onClick={changeRatingHandler} id="star-2" type="radio" name="rating" value="2" />
          <label className="rating__label" htmlFor="star-2">Rating 2</label>

          <input className="rating__input" onClick={changeRatingHandler} id="star-3" type="radio" name="rating" value="3" />
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input className="rating__input" onClick={changeRatingHandler} id="star-4" type="radio" name="rating" value="4" />
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input className="rating__input" onClick={changeRatingHandler} id="star-5" type="radio" name="rating" value="5" />
          <label className="rating__label" htmlFor="star-5">Rating 5</label>
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={changeTextReviewHandler} ref={textarea} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button onClick={(event) => sendCommentHandler(event, reviewData)} disabled={!isValid} className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>

  );
};

AddReview.propTypes = {
  movie: PropTypes.object
};

export default AddReview;
