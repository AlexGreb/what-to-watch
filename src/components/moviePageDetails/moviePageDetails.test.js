/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import MoviePageDetails from './moviePageDetails.jsx';
import {movie} from '../../mocks/movies.js';
import {createMovie} from '../../adapters/adapters.js';

describe(`MoviePageDetails`, () => {
  it(`Should render correctly a MoviePageDetails component`, () => {
    const {asFragment} = render(<MoviePageDetails movie={createMovie(movie)}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
