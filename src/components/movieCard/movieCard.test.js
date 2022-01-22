/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import MovieCard from './movieCard.jsx';
import {Provider} from 'react-redux';
import {store} from '../../store/store.js';

describe(`MovieCard`, () => {
  window.HTMLMediaElement.prototype.load = () => {};
  window.HTMLMediaElement.prototype.play = () => {};
  window.HTMLMediaElement.prototype.pause = () => {};
  it(`Should render correctly a movie card`, () => {
    const {asFragment} = render(<Provider store={store}>
      <MovieCard/>
    </Provider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
