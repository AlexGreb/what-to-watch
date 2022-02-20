/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import Footer from './footer.tsx';

describe(`Footer`, () => {
  it(`Should render correctly footer`, () => {
    const {asFragment} = render(<Footer/>);
    expect(asFragment()).toMatchSnapshot();
  });

});

