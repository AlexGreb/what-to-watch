import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../../components/videoPlayer/videoPlayer.jsx';

/* Сделать адаптер */
const SmallMovieCard = ({movie, onMouseEnter, onMouseLeave, isPlaying}) => {
  return (
    <>
      <article className={`small-movie-card catalog__movies-card`}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
      >
        <VideoPlayer src={movie.videoLink}
          poster={movie.poster}
          isPlaying={isPlaying}
          height={175}
          width={280}
        />
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{movie.title}</a>
        </h3>
      </article>
    </>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.object,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  isPlaying: PropTypes.bool,
};

export default SmallMovieCard;

