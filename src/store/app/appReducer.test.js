import {setActiveGenre, showMoreMovies} from './appReducer.ts';
import appReducer from './appReducer.ts';
import {MOVIES_TO_SHOW} from '../../constants/consts.ts';

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
