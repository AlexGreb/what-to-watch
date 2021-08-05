import React from 'react';
import SmallMovieCard from '../smallMovieCard/smallMovieCard.jsx';
import {movies} from '../../constants/data.js';

const MovieList = () => {

  return (
    <>
      <div className="catalog__movies-list">
        {
          movies.map((movie) => {
            return (
              <SmallMovieCard
                key={movie.id}
                movie={movie}
              />
            );
          })
        }
      </div>
    </>
  );
};

export default MovieList;
