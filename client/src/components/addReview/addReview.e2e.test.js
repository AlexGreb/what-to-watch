/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import AddReview from './addReview.jsx';

describe(`addRerview`, () => {
  it(`Shoud sent a comment`, () => {
    const {asFragment} = render(<AddReview/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

