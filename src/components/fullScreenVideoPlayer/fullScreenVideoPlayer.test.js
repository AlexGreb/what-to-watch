/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import FullScreenVideoPlayer from './fullScreenVideoPlayer.jsx';
import {movie} from '../../mocks/movies.js';
import {createMovie} from '../../adapters/adapters.js';

describe(`FullScreenVideoPlayer`, () => {
  it(`Should render correctly a FullScreenVideoPlayer`, () => {
    const {asFragment} = render(
        <FullScreenVideoPlayer
          onPlayButtonClick={jest.fn()}
          onFullScreenButtonClick={jest.fn()}
          onProgressBarClick={jest.fn()}
          movie={createMovie(movie)}
          isPlaying={false}
          progress={50}
          duration={100}
        >
          <div></div>
        </FullScreenVideoPlayer>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

