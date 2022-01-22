import React from 'react';
import Header from '../header/header.jsx';
import {useSelector} from 'react-redux';
import {namespaces} from '../../store/namespaces.js';
import PlayButton from '../playButton/playButton.jsx';
import AddMyListButton from '../addMyListButton/addMyListButton.jsx';

const MovieCard = () => {
  const promoMovie = useSelector((state) => state[namespaces.MOVIES].promoMovie);

  return (
    <section className="movie-card">
      <Header addClass={`movie-card__head`}/>
      <div className="movie-card__bg">
        <img src={promoMovie.background} alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={promoMovie.posterImage} alt={promoMovie.title} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promoMovie.title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promoMovie.genre}</span>
              <span className="movie-card__year">{promoMovie.date}</span>
            </p>

            <div className="movie-card__buttons">
              <PlayButton movieId={promoMovie.id}/>
              <AddMyListButton movie={promoMovie}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieCard;
