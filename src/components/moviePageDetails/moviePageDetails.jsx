import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const MoviePageDetails = ({movie}) => {

  const formatRuntime = (countMinutes) => {
    const hours = Math.floor(countMinutes / 60);
    const minutes = countMinutes - (hours * 60);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{movie.director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {
              movie.starring.map((actor, index, arr) => {
                return (
                  <Fragment key={actor + index}>
                    {`${actor}${arr.length - 1 !== index ? `,` : ``}`} <br />
                  </Fragment>
                );
              })
            }
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{formatRuntime(movie.runTime)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{movie.genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{movie.date}</span>
        </p>
      </div>
    </div>
  );
};

MoviePageDetails.propTypes = {
  movie: PropTypes.object
};

export default MoviePageDetails;

