/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import MovieList from './movieList.jsx';
import {moviesList} from '../../mocks/movies.js';

describe(`MovieList`, () => {
  window.HTMLMediaElement.prototype.load = () => {};
  window.HTMLMediaElement.prototype.play = () => {};
  window.HTMLMediaElement.prototype.pause = () => {};
  it(`Should render correctly movie list`, () => {
    const {asFragment} = render(<MovieList
      moviesList={moviesList}
    />);
    expect(asFragment).toMatchSnapshot();
  });
});
