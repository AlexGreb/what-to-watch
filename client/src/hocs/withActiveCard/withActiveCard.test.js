import React from 'react';
import renderer from 'react-test-renderer';
import withActiveCard from './withActiveCard';
import {movie} from '../../mocks/movies.js';

describe(`WithActiveCard hoc`, () => {
  const mockComponent = () => {
    return (
      <div></div>
    );
  };

  it(`Should render correctly WithActiveCard HOC`, ()=> {
    const wrappedComponent = withActiveCard(mockComponent);
    const tree = renderer.create(<wrappedComponent movie={movie}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
