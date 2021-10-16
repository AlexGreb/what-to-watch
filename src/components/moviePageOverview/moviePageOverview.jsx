import React from 'react';
import PropTypes from 'prop-types';
import {getRatingValue} from '../../adapters/adapters.js';

const MoviePageOverview = ({movie}) => {

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{movie.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingValue(movie.rating)}</span>
          <span className="movie-rating__count">{movie.votes} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {movie.description}

        <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {movie.starring.join(`, `)}</strong></p>
      </div>
    </>
  );
};

MoviePageOverview.propTypes = {
  movie: PropTypes.object
};

export default MoviePageOverview;
