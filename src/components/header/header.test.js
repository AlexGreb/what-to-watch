/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import Header from './header.jsx';

describe(`Header`, () => {
  it(`Should render correctly header`, () => {
    const {asFragment} = render(<Header/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

