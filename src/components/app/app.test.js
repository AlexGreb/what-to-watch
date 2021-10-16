/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import App from './app.jsx';
import {Provider} from 'react-redux';
import {store} from '../../store/store.js';
import {createMovie} from '../../adapters/adapters.js';
import {movie} from '../../mocks/movies.js';

const mockMovie = createMovie(movie);

describe(`App`, () => {
  window.HTMLMediaElement.prototype.load = () => {};
  window.HTMLMediaElement.prototype.play = () => {};
  window.HTMLMediaElement.prototype.pause = () => {};
  jest.mock(`react-redux`, () => ({
    ...jest.requireActual(`react-redux`),
    useSelector: jest.fn()
      .mockReturnValue({moviesList: [
        mockMovie
      ]})
  }));
  it(`Should render correctly an app`, () => {
    const {asFragment} = render(
        <Provider store={store}>
          <App/>
        </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

