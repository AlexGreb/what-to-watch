import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from './movieList.jsx';

describe(`MovieList`, () => {
  it(`Should render correctly movie list`, () => {
    const tree = renderer.create(<MovieList/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
