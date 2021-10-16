/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import Catalog from './catalog.jsx';
import {Provider} from 'react-redux';
import {store} from '../../store/store.js';

describe(`Catalog`, () => {

  it(`Should render correctly a catalog`, () => {
    const {asFragment} = render(<Provider store={store}>
      <Catalog/>
    </Provider>);
    expect(asFragment()).toMatchSnapshot();
  });
});

