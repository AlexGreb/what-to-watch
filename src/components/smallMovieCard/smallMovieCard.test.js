/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import SmallMovieCard from './smallMovieCard.jsx';
import {movie} from '../../helpers/testData.js';
import {createMovie} from '../../adapters/adapters.js';

describe(`SmallMovieCard`, () => {
  window.HTMLMediaElement.prototype.load = () => {};
  window.HTMLMediaElement.prototype.play = () => {};
  window.HTMLMediaElement.prototype.pause = () => {};
  it(`Should render correctly movie card`, () => {
    const onMouseenterHandler = jest.fn();
    const onMousleaveHandler = jest.fn();

    const {asFragment} = render(<SmallMovieCard movie={createMovie(movie)}
      onMouseEnter={onMouseenterHandler}
      onMouseLeave={onMousleaveHandler}
      isPlaying={false}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});


