/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import Header from './header.jsx';
import {Provider} from 'react-redux';
import {store} from '../../store/store.js';

describe(`Header`, () => {
  it(`Should render correctly header`, () => {
    const {asFragment} = render(<Provider store={store}>
      <Header/>
    </Provider>);
    expect(asFragment()).toMatchSnapshot();
  });
});

