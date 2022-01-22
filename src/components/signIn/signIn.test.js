/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import SignIn from './signIn.jsx';
import {Provider} from 'react-redux';
import {store} from '../../store/store.js';

describe(`SignIn`, () => {
  it(`Should render correctly`, () => {
    const {asFragment} = render(<Provider store={store}><SignIn/></Provider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
