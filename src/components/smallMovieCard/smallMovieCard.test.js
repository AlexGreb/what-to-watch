import React from 'react';
import renderer from 'react-test-renderer';
import smallMovieCard from './smallMovieCard.jsx';
import {movie} from '../../helpers/testData.js';

describe(`SmallMovieCard`, () => {
  test.only(`Should render correctly movie card`, () => {
    const tree = renderer.create(<smallMovieCard movie={movie}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


