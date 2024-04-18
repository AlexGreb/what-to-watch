/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import Main from './main.jsx';
import {moviesList} from '../../mocks/movies.js';
import {Provider} from 'react-redux';
import {store} from '../../store/store.js';

describe(`Main`, () => {
  window.HTMLMediaElement.prototype.load = () => {};
  window.HTMLMediaElement.prototype.play = () => {};
  window.HTMLMediaElement.prototype.pause = () => {};

  it(`Should render correctly main page`, () => {
    const {asFragment} = render(
        <Provider store={store}>
          <Main
            moviesList={moviesList}
          />
        </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
