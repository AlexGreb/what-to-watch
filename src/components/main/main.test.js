import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

describe(`Main`, () => {
  it(`Should render correctly main page`, () => {
    const tree = renderer.create(<Main/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
