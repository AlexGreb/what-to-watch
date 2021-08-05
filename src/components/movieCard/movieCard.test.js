import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movieCard.jsx';

describe(`MovieCard`, () => {
  it(`Should render correctly a movie card`, () => {
    const tree = renderer.create(<MovieCard/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
