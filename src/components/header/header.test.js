import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header.jsx';

describe(`Header`, () => {
  it(`Should render correctly header`, () => {
    const tree = renderer.create(<Header/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

