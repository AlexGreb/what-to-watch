import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import SmallMovieCard from './smallMovieCard.jsx';
import {movie} from '../../mocks/movies.js';

Enzyme.configure({adapter: new Adapter()});

describe(`SmallMovieList`, () => {
  it(`simulate mouse enter events on a small movie card`, () => {
    const mouseEnterHandler = jest.fn();
    const onMouseleaveHandler = jest.fn();
    const smallMovieCard = shallow(
        <SmallMovieCard movie={movie}
          isPlaying={false}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={onMouseleaveHandler}/>
    );
    const card = smallMovieCard.find(`.small-movie-card`);
    card.simulate(`mouseenter`);
    expect(mouseEnterHandler).toHaveBeenCalled();
  });
});
