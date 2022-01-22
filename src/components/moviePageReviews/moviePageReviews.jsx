import React from 'react';
import PropTypes from 'prop-types';
import useReviews from '../../hooks/useReviews';


const MoviePageReviews = ({movieId}) => {
  const {
    reviews,
    isLoading
  } = useReviews(movieId);
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {
          !isLoading ? reviews.map((it) => {
            return (
              <div className="review"
                key={it.id}
              >
                <blockquote className="review__quote">
                  <p className="review__text">{it.comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{it.name}</cite>
                    <time className="review__date" dateTime="2016-12-24">{it.date}</time>
                  </footer>
                </blockquote>

                <div className="review__rating">{it.rating}</div>
              </div>
            );
          }) : <span>Loading...</span>
        }
      </div>
    </div>
  );
};

MoviePageReviews.propTypes = {
  movieId: PropTypes.number
};

export default MoviePageReviews;
