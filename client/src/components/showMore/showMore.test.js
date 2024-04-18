/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import ShowMore from './showMore.jsx';

describe(`ShowMore`, () => {
  it(`Should render correctly a ShowMore component`, () => {
    const {asFragment} = render(<ShowMore/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
