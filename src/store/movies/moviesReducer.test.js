import {setMoviesList} from './moviesReducer.js';
import moviesReducer from './moviesReducer.js';
import moviesList from '../../mocks/movies.js';

describe(`MoviesReducer`, () => {
  it(`The reducer should return correct movies`, () => {
    expect(moviesReducer({
      moviesList: []
    },
    setMoviesList(moviesList))).toEqual({
      moviesList
    });
  });
});
