/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import FullScreenVideoPlayer from './fullScreenVideoPlayer.jsx';
import {movie} from '../../mocks/movies.js';
import {createMovie} from '../../adapters/adapters.js';

describe(`FullScreenVideoPlayer`, () => {
  window.HTMLMediaElement.prototype.load = () => {};
  window.HTMLMediaElement.prototype.play = () => {};
  window.HTMLMediaElement.prototype.pause = () => {};

  it(`Should call the callbacks when on click buttons 'Play' and 'Pause'`, async () => {
    const playButtonClickHandler = jest.fn();
    const fullScreenButtonClickHandler = jest.fn();
    const progressBarClickHandler = jest.fn();
    const currentMovie = createMovie(movie);

    const {rerender, getByText} = await render(
        <FullScreenVideoPlayer
          onPlayButtonClick={playButtonClickHandler}
          onFullScreenButtonClick={fullScreenButtonClickHandler}
          onProgressBarClick={progressBarClickHandler}
          movie={currentMovie}
          isPlaying={false}
          progress={50}
          duration={100}
        >
          <div></div>
        </FullScreenVideoPlayer>
    );

    fireEvent.click(getByText(`Play`));
    expect(playButtonClickHandler).toHaveBeenCalledTimes(1);

    await rerender(<FullScreenVideoPlayer
      onPlayButtonClick={playButtonClickHandler}
      onFullScreenButtonClick={fullScreenButtonClickHandler}
      onProgressBarClick={progressBarClickHandler}
      movie={currentMovie}
      isPlaying={true}
      progress={50}
      duration={100}
    >
      <div></div>
    </FullScreenVideoPlayer>);
    fireEvent.click(getByText(`Pause`));
    expect(playButtonClickHandler).toHaveBeenCalledTimes(2);
  });

  it(`Should call the callbacks when on click progressbar and click fullscreen button`, () => {
    const fullScreenButtonClickHandler = jest.fn();
    const progressBarClickHandler = jest.fn();
    const currentMovie = createMovie(movie);

    const {getByRole, getByText} = render(
        <FullScreenVideoPlayer
          onPlayButtonClick={jest.fn()}
          onFullScreenButtonClick={fullScreenButtonClickHandler}
          onProgressBarClick={progressBarClickHandler}
          movie={currentMovie}
          isPlaying={false}
          progress={50}
          duration={100}
        >
          <div></div>
        </FullScreenVideoPlayer>
    );

    fireEvent.click(getByRole(`progressbar`));
    expect(progressBarClickHandler).toHaveBeenCalledTimes(1);
    fireEvent.click(getByText(`Full screen`));
    expect(fullScreenButtonClickHandler).toHaveBeenCalledTimes(1);

  });
});
