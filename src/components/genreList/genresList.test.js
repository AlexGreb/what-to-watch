/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import GenresList from './genresList.jsx';
import {genres} from '../../mocks/movies.js';

describe(`GenreList`, () => {
  window.HTMLMediaElement.prototype.load = () => {};
  window.HTMLMediaElement.prototype.play = () => {};
  window.HTMLMediaElement.prototype.pause = () => {};

  it(`Should render correctly a genreList component`, () => {
    const {asFragment} = render(<GenresList
      onFilterChange={jest.fn()}
      currentGenre={genres[0]}
      genres={genres}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});


