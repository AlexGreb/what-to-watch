import {setActiveGenre, showMoreMovies} from './appReducer.js';
import appReducer from './appReducer.js';
import {MOVIES_TO_SHOW} from '../../constants/consts.js';

describe(`App reducer`, () => {
  it(`The reducer should return the correct genre value`, () => {
    expect(appReducer({
      currentGenre: `All genres`
    },
    setActiveGenre(`Comedy`))).toEqual({
      currentGenre: `Comedy`
    });
  });

  it(`The reducer should return the right number of movies`, () => {
    expect(appReducer({
      shownMoviesNumber: MOVIES_TO_SHOW,
    }, showMoreMovies(MOVIES_TO_SHOW))).toEqual({
      shownMoviesNumber: MOVIES_TO_SHOW + MOVIES_TO_SHOW
    });
  });

});
