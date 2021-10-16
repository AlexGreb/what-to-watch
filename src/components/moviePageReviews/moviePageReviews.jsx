import React from 'react';
import PropTypes from 'prop-types';


const MoviePageReviews = ({reviews}) => {

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {
          reviews.map((it) => {
            return (
              <div className="review"
                key={it.id}
              >
                <blockquote className="review__quote">
                  <p className="review__text">{it.comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{it.user.name}</cite>
                    <time className="review__date" dateTime="2016-12-24">{it.date}</time>
                  </footer>
                </blockquote>

                <div className="review__rating">{it.rating}</div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

MoviePageReviews.propTypes = {
  reviews: PropTypes.array
};

export default MoviePageReviews;
