/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import Button from './button.jsx';

describe(`Button`, () => {

  it(`Should render correctly a catalog`, () => {
    const {asFragment} = render(
        <Button>
          Play
        </Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});

