import React from 'react';
import renderer from 'react-test-renderer';
import Catalog from './catalog.jsx';

describe(`Catalog`, () => {
  it(`Should render correctly a catalog`, () => {
    const tree = renderer.create(<Catalog/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});

