/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import MoviePage from './moviePage.jsx';
import {movie, moviesList} from '../../mocks/movies.js';
import {reviews} from '../../mocks/reviews.js';
import {createMovie} from '../../adapters/adapters.js';
import {tabs} from '../../constants/consts.js';
import {Provider} from 'react-redux';
import {store} from '../../store/store.js';


describe(`moviePage`, () => {
  window.HTMLMediaElement.prototype.load = () => {};
  window.HTMLMediaElement.prototype.play = () => {};
  window.HTMLMediaElement.prototype.pause = () => {};

  it(`Should render correctly a moviePage`, () => {
    const {asFragment} = render(<Provider store={store}><MoviePage movie={createMovie(movie)}
      movies={moviesList}
      reviews={reviews}
      activeTab={tabs.OVERVIEW}
      onChangeActiveTab={jest.fn()}
    /></Provider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
