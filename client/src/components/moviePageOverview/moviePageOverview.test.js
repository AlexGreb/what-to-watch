/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import MoviePageOverview from './moviePageOverview.jsx';
import {movie} from '../../mocks/movies.js';
import {createMovie} from '../../adapters/adapters.js';

describe(`MoviePageDetails`, () => {
  it(`Should render correctly a MoviePageDetails component`, () => {
    const {asFragment} = render(<MoviePageOverview movie={createMovie(movie)}/>);
    expect(asFragment()).toMatchSnapshot();
  });

});

