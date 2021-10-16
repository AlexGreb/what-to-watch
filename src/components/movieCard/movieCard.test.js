/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import MovieCard from './movieCard.jsx';

describe(`MovieCard`, () => {
  it(`Should render correctly a movie card`, () => {
    const {asFragment} = render(<MovieCard/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
