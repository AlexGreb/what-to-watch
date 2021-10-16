import React from 'react';
import GenresList from './genresList.jsx';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {genres} from '../../mocks/movies.js';

Enzyme.configure({adapter: new Adapter()});

describe(`GenreList`, () => {
  it(`simulates click events on a genre in GenreList`, () => {
    const filterChangeHandler = jest.fn();
    const component = shallow(
        <GenresList genres={genres}
          onFilterChange={filterChangeHandler}
          currentGenre={`Comedy`}
        />
    );
    const genreItems = component.find(`.catalog__genres-link`);
    genreItems.forEach((it) => {
      it.simulate(`click`, {preventDefault() {}});
    });
    expect(filterChangeHandler).toHaveBeenCalledTimes(genres.length);
  });

});
