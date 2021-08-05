import React from 'react';
import PropTypes from 'prop-types';

/* Сделать адаптер */
const SmallMovieCard = ({movie}) => {

  return (
    <>
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={movie.preview_image} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{movie.name}</a>
        </h3>
      </article>
    </>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.object
};

export default SmallMovieCard;

