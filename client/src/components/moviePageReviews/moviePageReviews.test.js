/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import MoviePageReviews from './moviePageReviews.jsx';
import {review} from '../../mocks/reviews.js';

describe(`MoviePageReviews`, () => {
  it(`Should render correctly a MoviePageReviews component`, () => {
    const {asFragment} = render(<MoviePageReviews reviews={review}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

